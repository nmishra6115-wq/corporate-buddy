const toolsData = {
    salary: {
        title: "Salary & Tax Optimizer",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Annual CTC (in Lakhs INR):</label>
                <input type="number" id="salCtc" value="12" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none" oninput="calcSalary()">
            </div>
            <div class="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                    <span class="text-xs text-slate-400">Estimated Monthly In-Hand</span>
                    <p id="resInHand" class="text-2xl font-black text-emerald-400 mt-1">₹82,500</p>
                </div>
                <div>
                    <span class="text-xs text-slate-400">Annual Provident Fund (PF)</span>
                    <p id="resPf" class="text-2xl font-black text-white mt-1">₹43,200</p>
                </div>
            </div>
            <p class="text-xs text-slate-500">*Calculations approximate standard Indian corporate salary structuring (Basic, HRA, Special Allowance, Professional Tax, and Standard Deduction).</p>
        `
    },
    leave: {
        title: "Leave & Long Weekend Planner",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Select Month:</label>
                <select class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" id="leaveMonth">
                    <option value="August">August (Independence Day & Janmashtami)</option>
                    <option value="October">October (Gandhi Jayanti & Diwali)</option>
                    <option value="December">December (Christmas & New Year)</option>
                </select>
            </div>
            <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30 text-emerald-300 text-sm">
                <strong>Tip for October:</strong> Take 2 days of leave (Oct 21 & 22) around Diwali to enjoy a 5-day continuous break!
            </div>
        `
    },
    email: {
        title: "Professional Email Assistant",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Select Template Type:</label>
                <select id="emailType" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" onchange="updateEmail()">
                    <option value="resignation">Standard Resignation Email</option>
                    <option value="followup">HR Follow-up on Offer / Payroll</option>
                    <option value="escalation">Client / Project Delay Escalation</option>
                </select>
                <label class="block text-sm font-medium text-slate-300 mb-2">Generated Draft:</label>
                <textarea id="emailBox" rows="6" class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 focus:outline-none"></textarea>
            </div>
            <button onclick="navigator.clipboard.writeText(document.getElementById('emailBox').value); alert('Copied to clipboard!');" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition shadow-lg shadow-emerald-600/20">Copy Email Draft</button>
        `
    },
    shift: {
        title: "Shift Allowance & Overtime Calculator",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Night Shift Allowance per Shift (₹):</label>
                <input type="number" id="shiftRate" value="350" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcShift()">
                <label class="block text-sm font-medium text-slate-300 mb-2">Night Shifts Worked This Month:</label>
                <input type="number" id="shiftCount" value="12" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcShift()">
            </div>
            <div class="bg-amber-950/40 p-4 rounded-xl border border-amber-500/30">
                <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider">Total Shift Allowance Earned</span>
                <p id="shiftTotal" class="text-3xl font-black text-amber-300 mt-1">₹4,200</p>
            </div>
        `
    },
    payslip: {
        title: "Payslip Decoder",
        content: `
            <div class="space-y-3 text-sm">
                <div class="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <strong class="text-white block mb-1">LTA (Leave Travel Allowance)</strong>
                    <p class="text-slate-400 text-xs leading-relaxed">Tax exemption claimable twice in a block of 4 years for domestic travel expenses incurred by the employee.</p>
                </div>
                <div class="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <strong class="text-white block mb-1">Gratuity</strong>
                    <p class="text-slate-400 text-xs leading-relaxed">Statutory benefit paid when an employee completes 5 continuous years of service with the organization upon exit.</p>
                </div>
                <div class="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <strong class="text-white block mb-1">Professional Tax (PT)</strong>
                    <p class="text-slate-400 text-xs leading-relaxed">State-level tax (typically ₹200/month in states like Karnataka and Maharashtra) deducted directly by employers.</p>
                </div>
            </div>
        `
    },
    meeting: {
        title: "Meeting Agenda & Minutes Generator",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Meeting Topic / Title:</label>
                <input type="text" id="mTitle" value="Sprint 14 Retro & Planning" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4">
                <label class="block text-sm font-medium text-slate-300 mb-2">Key Action Item Assigned To:</label>
                <input type="text" id="mAssignee" value="Operations Team" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4">
            </div>
            <div class="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-indigo-300 space-y-2">
                <p><strong>[AGENDA]</strong> 1. Review previous metrics. 2. Identify blockers. 3. Finalize timeline.</p>
                <p><strong>[MOM]</strong> Minutes recorded successfully. Next sync scheduled for next Thursday.</p>
            </div>
        `
    },
    expense: {
        title: "Corporate Expense & Per Diem Calculator",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Client Business Trip Days:</label>
                <input type="number" id="expDays" value="4" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcExp()">
                <label class="block text-sm font-medium text-slate-300 mb-2">Daily Per Diem Limit (₹):</label>
                <input type="number" id="expLimit" value="2500" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcExp()">
            </div>
            <div class="bg-purple-950/40 p-4 rounded-xl border border-purple-500/30">
                <span class="text-xs text-purple-400 font-semibold uppercase tracking-wider">Maximum Claimable Per Diem</span>
                <p id="expTotal" class="text-3xl font-black text-purple-300 mt-1">₹10,000</p>
            </div>
        `
    },
    career: {
        title: "Notice Period & Buyout Estimator",
        content: `
            <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Current Monthly Basic Salary (₹):</label>
                <input type="number" id="carBasic" value="50000" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcCareer()">
                <label class="block text-sm font-medium text-slate-300 mb-2">Days to Short-close in Notice Period:</label>
                <input type="number" id="carDays" value="45" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-4" oninput="calcCareer()">
            </div>
            <div class="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30">
                <span class="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Estimated Notice Buyout Amount</span>
                <p id="carTotal" class="text-3xl font-black text-emerald-300 mt-1">₹75,000</p>
            </div>
        `
    }
};

function openTool(toolKey) {
    const data = toolsData[toolKey];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = data.content;
    document.getElementById('toolModal').classList.remove('hidden');
    if(toolKey === 'email') updateEmail();
}

function closeTool() {
    document.getElementById('toolModal').classList.add('hidden');
}

function calcSalary() {
    const ctc = parseFloat(document.getElementById('salCtc').value) || 0;
    const annualNet = ctc * 100000 * 0.82; 
    const monthly = Math.round(annualNet / 12);
    const pf = Math.round(ctc * 100000 * 0.036);
    document.getElementById('resInHand').innerText = '₹' + monthly.toLocaleString('en-IN');
    document.getElementById('resPf').innerText = '₹' + pf.toLocaleString('en-IN');
}

function updateEmail() {
    const type = document.getElementById('emailType').value;
    let text = "";
    if(type === 'resignation') {
        text = "Dear Manager,\n\nPlease accept this email as formal notification that I am resigning from my position as [Role] at [Company]. My last working day will be [Date], adhering to the standard notice period clause.\n\nThank you for the guidance and support during my tenure.\n\nBest regards,\n[Your Name]";
    } else if(type === 'followup') {
        text = "Dear HR Team,\n\nI am writing to follow up on the status of my reimbursement / joining formalities. Could you please provide an update on when this will be processed?\n\nThank you,\n[Your Name]";
    } else {
        text = "Hi Team,\n\nI am writing to highlight a bottleneck regarding [Issue/Dependency]. If not resolved by [Date], it may impact our delivery timeline.\n\nAppreciate your prompt attention to this matter.\n\nRegards,\n[Your Name]";
    }
    document.getElementById('emailBox').value = text;
}

function calcShift() {
    const rate = parseFloat(document.getElementById('shiftRate').value) || 0;
    const count = parseFloat(document.getElementById('shiftCount').value) || 0;
    document.getElementById('shiftTotal').innerText = '₹' + (rate * count).toLocaleString('en-IN');
}

function calcExp() {
    const days = parseFloat(document.getElementById('expDays').value) || 0;
    const limit = parseFloat(document.getElementById('expLimit').value) || 0;
    document.getElementById('expTotal').innerText = '₹' + (days * limit).toLocaleString('en-IN');
}

function calcCareer() {
    const basic = parseFloat(document.getElementById('carBasic').value) || 0;
    const days = parseFloat(document.getElementById('carDays').value) || 0;
    const daily = basic / 30;
    document.getElementById('carTotal').innerText = '₹' + Math.round(daily * days).toLocaleString('en-IN');
}