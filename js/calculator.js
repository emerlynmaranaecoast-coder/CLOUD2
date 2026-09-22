/**
 * ECOAST - Tuition & Scholarship Calculator
 */

document.addEventListener("DOMContentLoaded", () => {
  const programSelect = document.getElementById("calcProgram");
  const academicSelect = document.getElementById("calcAcademic");
  const scholarshipSelect = document.getElementById("calcScholarship");
  const paymentSelect = document.getElementById("calcPayment");

  // Output elements
  const grossFeeEl = document.getElementById("calcGrossFee");
  const discountRateEl = document.getElementById("calcDiscountRate");
  const discountAmountEl = document.getElementById("calcDiscountAmount");
  const netFeeEl = document.getElementById("calcNetFee");
  const paymentTermEl = document.getElementById("calcPaymentTerm");
  const termAmountEl = document.getElementById("calcTermAmount");
  const badgeAppliedEl = document.getElementById("calcBadgeApplied");

  if (!programSelect || !grossFeeEl) return;

  // Program base tuition per semester
  const programFees = {
    cs: { base: 46000, lab: 7500, units: 21 },
    cloud: { base: 48000, lab: 8500, units: 22 },
    cpe: { base: 49000, lab: 9000, units: 23 },
    cyber: { base: 47000, lab: 8500, units: 21 },
    data: { base: 46500, lab: 8000, units: 21 },
    ece: { base: 49500, lab: 9500, units: 23 }
  };

  // Scholarship discounts
  const scholarshipRates = {
    presidential: 1.0, // 100% tuition waiver
    dost: 0.75,         // 75% grant
    deans: 0.50,        // 50% waiver
    women_in_tech: 0.30,// 30% grant
    early_bird: 0.15,   // 15% discount
    none: 0.0           // 0%
  };

  function updateCalculation() {
    const progKey = programSelect.value || "cs";
    const progData = programFees[progKey] || programFees.cs;
    const scholarKey = scholarshipSelect.value || "none";
    const paymentPlan = paymentSelect.value || "install4";
    const academicBackground = academicSelect.value || "stem_honors";

    // Auto-suggest scholarship based on academic background if user didn't pick highest
    let discountRate = scholarshipRates[scholarKey];

    // If user selected Highest Honors in academic, guarantee at least Presidential or Dean's
    if (academicBackground === "highest_honors" && discountRate < 1.0) {
      discountRate = 1.0;
      scholarshipSelect.value = "presidential";
    } else if (academicBackground === "high_honors" && discountRate < 0.5) {
      discountRate = 0.5;
      scholarshipSelect.value = "deans";
    }

    const grossTuition = progData.base + progData.lab;
    const discountAmount = Math.round(progData.base * discountRate);
    let netTuition = grossTuition - discountAmount;

    // Additional 5% discount if paid in full cash
    let cashDiscount = 0;
    if (paymentPlan === "full") {
      cashDiscount = Math.round(netTuition * 0.05);
      netTuition -= cashDiscount;
    }

    // Term breakdown
    let termLabel = "Monthly Installment (4 months)";
    let termAmount = Math.round(netTuition / 4);

    if (paymentPlan === "full") {
      termLabel = "One-Time Full Cash Payment (5% Prompt Discount)";
      termAmount = netTuition;
    } else if (paymentPlan === "install2") {
      termLabel = "Semestral Split (Midterms & Finals, 2 payments)";
      termAmount = Math.round(netTuition / 2);
    }

    // Format Philippine Peso (PHP)
    const formatter = new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0
    });

    grossFeeEl.textContent = formatter.format(grossTuition);
    discountRateEl.textContent = `${Math.round(discountRate * 100)}% + ${paymentPlan === 'full' ? '5% Cash Disc.' : '0%'}`;
    discountAmountEl.textContent = `- ${formatter.format(discountAmount + cashDiscount)}`;
    netFeeEl.textContent = formatter.format(netTuition);
    paymentTermEl.textContent = termLabel;
    termAmountEl.textContent = formatter.format(termAmount);

    if (badgeAppliedEl) {
      if (discountRate === 1.0) {
        badgeAppliedEl.textContent = "🏆 100% Full Presidential Scholar Applied";
        badgeAppliedEl.style.display = "inline-flex";
      } else if (discountRate >= 0.5) {
        badgeAppliedEl.textContent = `⭐ ${Math.round(discountRate * 100)}% Merit Discount Applied`;
        badgeAppliedEl.style.display = "inline-flex";
      } else if (discountRate > 0) {
        badgeAppliedEl.textContent = `✨ ${Math.round(discountRate * 100)}% Pioneer Grant Applied`;
        badgeAppliedEl.style.display = "inline-flex";
      } else {
        badgeAppliedEl.style.display = "none";
      }
    }
  }

  // Event listeners
  programSelect.addEventListener("change", updateCalculation);
  academicSelect.addEventListener("change", updateCalculation);
  scholarshipSelect.addEventListener("change", updateCalculation);
  paymentSelect.addEventListener("change", updateCalculation);

  // Initial calculation
  updateCalculation();
});
