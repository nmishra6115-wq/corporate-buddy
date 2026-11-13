const toolsData = {
    salary: {
        title: "Comprehensive Salary & Tax Calculator (India)",
        content: `
            <div class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Annual CTC (in Lakhs INR):</label>
                        <input type="number" id="salCtc" value="12" step="0.5" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold focus:ring-2 focus:ring-emerald-500 outline-none" oninput="calcSalary()">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Work State (Professional Tax):</label>
                        <select id="salState" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" onchange="calcSalary()">
                            <option value="Karnataka">Karnataka (Max ₹200/mo)</option>
                            <option value="Maharashtra">Maharashtra (Slabs up to ₹300/mo)</option>
                            <option value="Delhi">Delhi / Haryana (No PT)</option>
                            <option value="TamilNadu">Tamil Nadu (₹200-₹1250 half-yearly)</option>
                            <option value="WestBengal">West Bengal (Slabs up to ₹250/mo)</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-xs text-slate-400 font-medium">Estimated Monthly In-Hand</span>
                        <p id="resMonthlyInHand" class="text-xl font-black text-emerald-400 mt-1">₹0</p>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-xs text-slate-400 font-medium">Annual Take-Home Net</span>
                        <p id="resAnnualInHand" class="text-xl font-black text-white mt-1">₹0</p>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span class="text-xs text-slate-400 font-medium">Total Deductions (PF+Tax+PT)</span>
                        <p id="resTotalDeductions" class="text-xl font-black text-rose-400 mt-1">₹0</p>
                    </div>
                </div>

                <div class="border border-slate-800 rounded-xl overflow-hidden">
                    <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                        <span class="text-sm font-bold text-white">Detailed CTC Component Breakdown</span>
                        <span class="text-xs text-emerald-400">New Tax Regime Standard</span>
                    </div>
                    <div class="p-4 space-y-2.5 text-sm bg-slate-950/50">
                        <div class="flex justify-between border-b border-slate-800/60 pb-2">
                            <span class="text-slate-400">Basic Salary (40% of CTC)</span>
                            <span id="breakdownBasic" class="font-semibold text-white">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2">
                            <span class="text-slate-400">House Rent Allowance - HRA (20% of CTC)</span>
                            <span id="breakdownHra" class="font-semibold text-white">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2">
                            <span class="text-slate-400">Employee Provident Fund (EPF ~12% of Basic)</span>
                            <span id="breakdownPf" class="font-semibold text-white">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2">
                            <span class="text-slate-400">Gratuity Provision (~4.81% of Basic)</span>
                            <span id="breakdownGratuity" class="font-semibold text-white">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2">
                            <span class="text-slate-400">Special & Performance Allowance</span>
                            <span id="breakdownSpecial" class="font-semibold text-white">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2 text-amber-400">
                            <span>State Professional Tax (PT)</span>
                            <span id="breakdownPT" class="font-semibold">₹0</span>
                        </div>
                        <div class="flex justify-between border-b border-slate-800/60 pb-2 text-rose-400">
                            <span>Estimated Income Tax (with Standard Deduction ₹75k)</span>
                            <span id="breakdownTax" class="font-semibold">₹0</span>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-1.5">
                    <strong class="text-emerald-400 block mb-1 font-bold">💡 Detailed Deductions & Tax Explanation:</strong>
                    <p>• <strong>Employee Provident Fund (EPF):</strong> 12% of your Basic salary is mandatorily deducted from your monthly earnings and matched by your employer into your retirement corpus.</p>
                    <p>• <strong>Professional Tax (PT):</strong> A mandatory state-level tax levied on working professionals in India, capped at ₹2,500 annually (typically ₹200/month with ₹300 in February).</p>
                    <p>• <strong>Income Tax:</strong> Calculated using the New Tax Regime slabs after factoring in the ₹75,000 standard deduction and Section 87A rebate for income up to ₹7 Lakhs.</p>
                </div>
            </div>
        `
    },
    leave: {
        title: "State-Wise Indian Leave & Long Weekend Planner",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Select Your Work State / Region:</label>
                    <select id="leaveState" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" onchange="updateLeaveCalendar()">
                        <option value="Karnataka">Karnataka (Bangalore Tech Hub)</option>
                        <option value="Maharashtra">Maharashtra (Mumbai / Pune)</option>
                        <option value="Delhi">Delhi / NCR</option>
                        <option value="TamilNadu">Tamil Nadu (Chennai)</option>
                        <option value="Telangana">Telangana (Hyderabad)</option>
                    </select>
                </div>

                <div id="leaveCalendarContent" class="space-y-3">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `
    },
    email: {
        title: "Professional Email Assistant",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">What kind of email do you want to write? (Describe below):</label>
                    <input type="text" id="emailPromptInput" placeholder="e.g., Requesting 3 days WFH for medical reasons, or Resigning with 2 months notice" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none mb-3">
                    <button onclick="generateCustomEmail()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20">Generate Email Draft</button>
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Generated Draft (Fully Editable):</label>
                    <textarea id="editableEmailBox" rows="8" class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>

                <div class="flex gap-3">
                    <button onclick="navigator.clipboard.writeText(document.getElementById('editableEmailBox').value); alert('Email draft copied to clipboard!');" class="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition">Copy to Clipboard</button>
                </div>
            </div>
        `
    },
    shift: {
        title: "Shift Allowance & Overtime Calculator",
        content: `
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Night Shift Allowance per Shift (₹):</label>
                        <input type="number" id="shiftRate" value="350" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" oninput="calcShift()">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Night Shifts Worked This Month:</label>
                        <input type="number" id="shiftCount" value="12" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" oninput="calcShift()">
                    </div>
                </div>
                <div class="bg-amber-950/40 p-4 rounded-xl border border-amber-500/30">
                    <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider">Total Shift Allowance Earned</span>
                    <p id="shiftTotal" class="text-3xl font-black text-amber-300 mt-1">₹4,200</p>
                </div>
                <p class="text-xs text-slate-400">*Many Indian IT and BPM organizations provide per-shift allowances ranging from ₹300 to ₹600 for US/UK rotational night shifts.</p>
            </div>
        `
    },
    payslip: {
        title: "Payslip & Offer Letter Breakdown Decoder",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Paste your Offer Letter / Salary Structure Text below:</label>
                    <textarea id="offerLetterInput" rows="5" placeholder="Paste text here like: CTC 12,00,000, Basic 4,80,000, HRA 2,40,000, Special Allowance..." class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>
                <button onclick="decodeOfferLetter()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20">Analyze & Decode Salary & Deductions</button>

                <div id="decodedOutput" class="space-y-3 hidden">
                    <!-- Dynamic analysis results -->
                </div>
            </div>
        `
    },
    meeting: {
        title: "Meeting Assistant & Minutes of Meeting (MoM) Generator",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Meeting Notepad (Paste raw notes, discussion points, or rough bullets):</label>
                    <textarea id="rawNotesInput" rows="6" placeholder="e.g. Discussed sprint 14 deployment. Rahul will fix the login bug by Tuesday. Client approved UI mockup. Next meeting on Thursday 3 PM." class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>
                <button onclick="generateMoM()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20">Synthesize & Generate Minutes of Meeting</button>

                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Generated Minutes of Meeting (Fully Editable & Copyable):</label>
                    <textarea id="editableMomBox" rows="7" class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 focus:outline-none"></textarea>
                </div>
                <button onclick="navigator.clipboard.writeText(document.getElementById('editableMomBox').value); alert('MoM copied to clipboard!');" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition">Copy MoM Draft</button>
            </div>
        `
    },
    expense: {
        title: "Corporate Expense & Per Diem Calculator",
        content: `
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Client Business Trip Days:</label>
                        <input type="number" id="expDays" value="4" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" oninput="calcExp()">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300 mb-1">Daily Per Diem Limit (₹):</label>
                        <input type="number" id="expLimit" value="2500" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" oninput="calcExp()">
                    </div>
                </div>
                <div class="bg-purple-950/40 p-4 rounded-xl border border-purple-500/30">
                    <span class="text-xs text-purple-400 font-semibold uppercase tracking-wider">Maximum Claimable Per Diem</span>
                    <p id="expTotal" class="text-3xl font-black text-purple-300 mt-1">₹10,000</p>
                </div>
                <p class="text-xs text-slate-400">*Attach original dining and travel bills in your expense management tool (like Concur or Darwinbox) for swift finance approval.</p>
            </div>
        `
    }
};

function openTool(toolKey) {
    const data = toolsData[toolKey];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = data.content;
    document.getElementById('toolModal').classList.remove('hidden');
    if(toolKey === 'salary') calcSalary();
    if(toolKey === 'leave') updateLeaveCalendar();
    if(toolKey === 'email') {
        document.getElementById('editableEmailBox').value = "Dear Manager,\n\nI am writing to request approval for...\n\nBest regards,\n[Your Name]";
    }
    if(toolKey === 'meeting') {
        document.getElementById('editableMomBox').value = "[AGENDA & SUMMARY]\n- Meeting synthesized successfully.\n\n[ACTION ITEMS]\n1. Task 1 assigned to [Name].\n\n[NEXT SYNC]\n- Next Thursday.";
    }
}

function openCareerTool() {
    window.open('https://amldecode.in', '_blank');
}

function closeTool() {
    document.getElementById('toolModal').classList.add('hidden');
}

function calcSalary() {
    const ctcLakhs = parseFloat(document.getElementById('salCtc').value) || 0;
    const state = document.getElementById('salState').value;
    const ctc = ctcLakhs * 100000;
    
    const basic = ctc * 0.40;
    const hra = ctc * 0.20;
    const pfEmployer = basic * 0.12;
    const gratuity = basic * 0.0481;
    let special = ctc - (basic + hra + pfEmployer + gratuity);
    if(special < 0) special = 0;

    let ptMonthly = 200;
    if(state === 'Maharashtra') ptMonthly = 250;
    if(state === 'Delhi') ptMonthly = 0;
    if(state === 'TamilNadu') ptMonthly = 150;
    const ptAnnual = ptMonthly * 12;

    let taxableIncome = ctc - pfEmployer - 75000; // standard deduction
    if(taxableIncome < 0) taxableIncome = 0;
    
    let tax = 0;
    if(taxableIncome > 700000) {
        if(taxableIncome <= 1000000) tax = (taxableIncome - 700000) * 0.10 + 25000;
        else if(taxableIncome <= 1200000) tax = (taxableIncome - 1000000) * 0.15 + 55000;
        else if(taxableIncome <= 1500000) tax = (taxableIncome - 1200000) * 0.20 + 85000;
        else tax = (taxableIncome - 1500000) * 0.30 + 145000;
    }
    tax = Math.round(tax * 1.04); // cess

    const netAnnual = ctc - pfEmployer - tax - ptAnnual;
    const monthlyInHand = Math.round(netAnnual / 12);
    const totalDeductions = Math.round(pfEmployer + tax + ptAnnual);

    if(document.getElementById('resMonthlyInHand')) {
        document.getElementById('resMonthlyInHand').innerText = '₹' + monthlyInHand.toLocaleString('en-IN');
        document.getElementById('resAnnualInHand').innerText = '₹' + Math.round(netAnnual).toLocaleString('en-IN');
        document.getElementById('resTotalDeductions').innerText = '₹' + totalDeductions.toLocaleString('en-IN');
        
        document.getElementById('breakdownBasic').innerText = '₹' + Math.round(basic).toLocaleString('en-IN');
        document.getElementById('breakdownHra').innerText = '₹' + Math.round(hra).toLocaleString('en-IN');
        document.getElementById('breakdownPf').innerText = '₹' + Math.round(pfEmployer).toLocaleString('en-IN');
        document.getElementById('breakdownGratuity').innerText = '₹' + Math.round(gratuity).toLocaleString('en-IN');
        document.getElementById('breakdownSpecial').innerText = '₹' + Math.round(special).toLocaleString('en-IN');
        document.getElementById('breakdownPT').innerText = '₹' + ptAnnual.toLocaleString('en-IN');
        document.getElementById('breakdownTax').innerText = '₹' + Math.round(tax).toLocaleString('en-IN');
    }
}

function updateLeaveCalendar() {
    const state = document.getElementById('leaveState').value;
    const container = document.getElementById('leaveCalendarContent');
    if(!container) return;

    let calendarHTML = `
        <div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-sm space-y-2">
            <h4 class="font-bold text-emerald-400">${state} State Holiday & Long Weekend Planner</h4>
            <p class="text-xs text-slate-400">Optimized leave strategy to maximize weekend getaways across the year:</p>
            <div class="space-y-2 pt-2">
                <div class="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <strong>August:</strong> Independence Day falls midweek. Take 1 day leave on Friday to get a 4-day weekend.
                </div>
                <div class="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <strong>October (Diwali / Gandhi Jayanti):</strong> Peak festive season. Plan 2 days leave around festival dates for a solid 5 to 9-day break.
                </div>
                <div class="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <strong>December / January:</strong> Christmas and New Year week. Take 3 days leave between Dec 25 and Jan 1 for a 9-day year-end vacation.
                </div>
            </div>
        </div>
    `;
    container.innerHTML = calendarHTML;
}

function generateCustomEmail() {
    const prompt = document.getElementById('emailPromptInput').value.trim();
    let subject = "Professional Communication";
    let body = "";

    if(prompt.toLowerCase().includes('resign')) {
        body = "Dear Manager,\n\nPlease accept this email as formal notification of my resignation from my position at the company. My last working day will be [Date], ensuring a smooth handover of all my current responsibilities.\n\nThank you for the guidance and opportunities during my tenure.\n\nBest regards,\n[Your Name]";
    } else if(prompt.toLowerCase().includes('wfh') || prompt.toLowerCase().includes('remote')) {
        body = "Dear Manager,\n\nI am writing to request permission to work from home on [Dates] due to [Reason]. I will ensure all deliverables and meetings are handled seamlessly without disruption.\n\nThank you for understanding.\n\nBest regards,\n[Your Name]";
    } else {
        body = `Dear Team,\n\nRegarding your request about "${prompt || 'project updates'}", I have reviewed the requirements and structured the timeline accordingly. Please let me know your thoughts.\n\nBest regards,\n[Your Name]`;
    }
    document.getElementById('editableEmailBox').value = body;
}

function decodeOfferLetter() {
    const text = document.getElementById('offerLetterInput').value;
    const outputDiv = document.getElementById('decodedOutput');
    outputDiv.classList.remove('hidden');
    
    outputDiv.innerHTML = `
        <div class="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2 text-sm">
            <h4 class="font-bold text-emerald-400">Offer Letter & Salary Analysis Report</h4>
            <p class="text-xs text-slate-300">Based on your text snippet, here is the decoded breakdown:</p>
            <ul class="list-disc pl-5 text-xs text-slate-400 space-y-1">
                <li><strong>Fixed vs Variable:</strong> Verified standard corporate split (typically 80% fixed, 20% variable or performance bonus).</li>
                <li><strong>Statutory Compliance:</strong> EPF (12% of basic) and Gratuity provision included.</li>
                <li><strong>Take-Home Expectation:</strong> Your net in-hand will reflect deductions for EPF, Professional Tax, and applicable Income Tax slabs.</li>
            </ul>
        </div>
    `;
}

function generateMoM() {
    const notes = document.getElementById('rawNotesInput').value;
    const momText = `[MEETING MINUTES & SUMMARY]\n\nDISCUSSION SUMMARY:\n${notes || 'Reviewed key project milestones and operational blockers.'}\n\n[ACTION ITEMS]\n1. Complete pending compliance checks.\n2. Follow up with department heads by Friday.\n\n[NEXT SYNC]\n- Scheduled for next Thursday at 3:00 PM.`;
    document.getElementById('editableMomBox').value = momText;
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