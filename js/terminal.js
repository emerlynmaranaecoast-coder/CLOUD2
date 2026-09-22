/**
 * ECOAST - Interactive Web Terminal / CLI Simulator
 */

document.addEventListener("DOMContentLoaded", () => {
  const terminalScreen = document.getElementById("terminalScreen");
  const terminalInput = document.getElementById("terminalInput");
  const cmdChips = document.querySelectorAll(".terminal-cmd-chip");

  if (!terminalScreen || !terminalInput) return;

  const commands = {
    help: () => `
<div style="color: #38bdf8; font-weight: bold;">Available ECOAST CLI Commands:</div>
  <span style="color: #00f0ff;">programs</span>    - List undergraduate & special engineering degree programs
  <span style="color: #00f0ff;">about</span>       - Read ECOAST vision, mission, and accreditation status
  <span style="color: #00f0ff;">scholarship</span> - Review merit, DOST, and presidential grants
  <span style="color: #00f0ff;">labs</span>        - Inspect supercomputing cluster and robotics arena
  <span style="color: #00f0ff;">stats</span>       - View employment rates, faculty credentials & research metrics
  <span style="color: #00f0ff;">apply</span>       - Get direct link and guide to AY 2026-2027 entrance exam
  <span style="color: #00f0ff;">quiz</span>        - Quick 2-minute logic test for aspiring STEM pioneers
  <span style="color: #00f0ff;">contact</span>     - Reach the admissions office & campus hotline
  <span style="color: #00f0ff;">clear</span>       - Clear current terminal screen
    `,
    about: () => `
<div style="color: #10b981; font-weight: bold;">[ECOAST: Engineering Computing Academy of Science and Technology]</div>
Founded with the vision to forge world-class engineers, software architects, and AI researchers.
- Accreditation: ABET Computing & Engineering criteria compliant, CHED recognized.
- Academic Model: Industry Co-Op (600+ hours corporate internship at tier-1 tech firms).
- Headquarters: ECOAST Innovation Hub, University Parkway, Philippines.
    `,
    programs: () => `
<div style="color: #38bdf8; font-weight: bold;">Undergraduate Degree Offerings (AY 2026-2027):</div>
  • [CS-AI]   B.S. in Computer Science (Artificial Intelligence & Machine Learning)
  • [CLOUD]   B.S. in Cloud Computing & Distributed Infrastructure (DevOps/SRE)
  • [CPE-ROB] B.S. in Computer Engineering (Robotics & Cyber-Physical Systems)
  • [CYBER]   B.S. in Cybersecurity & Digital Forensics (SOC Operations)
  • [DATA]    B.S. in Data Science & Big Data Engineering
  • [ECE-5G]  B.S. in Electronics Engineering (5G/6G & Satellite IoT)
Type <span style="color: #00f0ff;">apply</span> to start your pre-registration!
    `,
    scholarship: () => `
<div style="color: #f59e0b; font-weight: bold;">ECOAST Merit & Financial Aid Grants:</div>
  1. Presidential Excellence: 100% Full Tuition & Lab Fee Waiver (With Highest Honors)
  2. Dean's STEM Pioneer: 50% Tuition Waiver (E-CAT Top 10% or With High Honors)
  3. DOST-SEI Co-Partner: 75% Coverage + Monthly Living Allowance
  4. Women in Computing Grant: 30% Financial Assistance for Future Female Technologists
    `,
    labs: () => `
<div style="color: #8b5cf6; font-weight: bold;">ECOAST Innovation Research Centers:</div>
  • Quantum & HPC Supercomputing Cluster (NVIDIA H100 Tensor GPUs)
  • Autonomous Robotics & Mechatronics Arena (ROS2 & 6-DoF Manipulators)
  • Cyber Defense Security Operations Center (SOC) (Live Cyber Range)
  • Cloud & Edge Computing Testbed (Bare-metal Kubernetes cluster)
    `,
    stats: () => `
<div style="color: #10b981; font-weight: bold;">ECOAST Performance Metrics:</div>
  • Graduate Employment Rate: 98.4% (Within 6 months of graduation)
  • Average Starting Salary of Alumni: ₱68,500 / month
  • Industry Tech Alliances: 50+ Global Corporations (AWS, Google, NVIDIA, Microsoft)
  • Total Scholarships Disbursed: ₱45,000,000+
  • Active Research Patents & Papers: 120+ published
    `,
    apply: () => `
<div style="color: #00f0ff; font-weight: bold;">Start Your Application Process:</div>
  Step 1: Fill out the online registration form on this portal.
  Step 2: Reserve an E-CAT (ECOAST College Aptitude Test) slot.
  Step 3: Interview with Academic Program Chair.
  Step 4: Receive your scholarship acceptance letter!
  <a href="#apply" style="color: #10b981; text-decoration: underline;">[Click here to jump straight to the Application Form]</a>
    `,
    contact: () => `
<div style="color: #38bdf8; font-weight: bold;">Admissions & Campus Inquiries:</div>
  • Email: admissions@ecoast.edu.ph
  • Hotline: +63 (2) 8888-ECOAST / +63 917 800 3262
  • Address: ECOAST Innovation Hub, University Parkway, Philippines
  • Office Hours: Monday to Saturday, 8:00 AM - 6:00 PM PHT
    `,
    quiz: () => `
<div style="color: #f59e0b; font-weight: bold;">[ECOAST Mini Aptitude Challenge]:</div>
<div style="color: #f8fafc; margin-top: 5px;">
  Question: If a distributed server handles 12,000 requests per minute with 4 balanced nodes,
  how many requests does each node handle per second?
  <br/>
  (Hint: 12,000 / 60 / 4 = ?)
  <br/>
  Type <span style="color: #00f0ff;">ans 50</span> to submit your answer!
</div>
    `,
    clear: () => {
      terminalScreen.innerHTML = `
        <div class="terminal-output">
          <div style="color: #38bdf8;">ECOAST CLI Environment [Version 4.2.0-LTS]</div>
          <div style="color: #94a3b8;">Type <span style="color: #00f0ff;">help</span> to inspect available commands.</div>
        </div>
      `;
      return null;
    }
  };

  function executeCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    // Echo user input
    const userLine = document.createElement("div");
    userLine.innerHTML = `<span style="color: #10b981;">visitor@ecoast:~$</span> <span style="color: #ffffff;">${escapeHtml(trimmed)}</span>`;
    terminalScreen.appendChild(userLine);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();

    // Check custom commands like "ans 50"
    if (cmd === "ans") {
      const answer = parts[1];
      const resultDiv = document.createElement("div");
      if (answer === "50") {
        resultDiv.innerHTML = `<div style="color: #10b981; font-weight: bold;">🎉 Correct! 12,000 / 60 = 200 req/s across the cluster; divided by 4 nodes = 50 req/sec per node. You have high engineering aptitude! Ready for ECOAST? Type 'apply'</div>`;
      } else {
        resultDiv.innerHTML = `<div style="color: #ef4444;">Not quite! Try calculating again: (12,000 req/min) ÷ 60 sec = 200 req/sec. Then divide by 4 nodes. Type 'ans 50'.</div>`;
      }
      terminalScreen.appendChild(resultDiv);
    } else if (commands[cmd]) {
      const output = commands[cmd]();
      if (output !== null) {
        const outputDiv = document.createElement("div");
        outputDiv.className = "terminal-output";
        outputDiv.innerHTML = output;
        terminalScreen.appendChild(outputDiv);
      }
    } else {
      const errorDiv = document.createElement("div");
      errorDiv.style.color = "#ef4444";
      errorDiv.innerHTML = `Command not recognized: '${escapeHtml(cmd)}'. Type <span style="color: #00f0ff;">help</span> for a list of commands.`;
      terminalScreen.appendChild(errorDiv);
    }

    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = terminalInput.value;
      terminalInput.value = "";
      executeCommand(val);
    }
  });

  cmdChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});
