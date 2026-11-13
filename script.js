/* ==================== TOOLS DATA & INTERACTIVE CONTENT ==================== */
const toolsData = {
    // 1. SALARY CALCULATOR TOOL
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
                    <p>• <strong>Professional Tax (PT):</strong> A mandatory state-level tax levied on working professionals in India, capped at ₹2,500 annually.</p>
                    <p>• <strong>Income Tax:</strong> Calculated using the New Tax Regime slabs after factoring in the ₹75,000 standard deduction.</p>
                </div>
            </div>
        `
    },

    // 2. STATE LEAVE PLANNER TOOL
    leave: {
        title: "State-Wise Indian Leave & Long Weekend Planner",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Select Your Work State / Region:</label>
                    <select id="leaveState" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none" onchange="updateLeaveCalendar()">
                        <option value="Karnataka">Karnataka (Bangalore / Tech Hub)</option>
                        <option value="Maharashtra">Maharashtra (Mumbai / Pune)</option>
                        <option value="Delhi">Delhi / NCR</option>
                        <option value="TamilNadu">Tamil Nadu (Chennai)</option>
                        <option value="Telangana">Telangana (Hyderabad)</option>
                    </select>
                </div>

                <div id="leaveCalendarContent" class="space-y-3">
                    <!-- Populated dynamically via updateLeaveCalendar() -->
                </div>
            </div>
        `
    },

    // 3. EMAIL ASSISTANT TOOL
    email: {
        title: "Professional Email Assistant",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Describe what email you want to write (e.g. Resignation, WFH request, Salary discussion):</label>
                    <div class="flex gap-2">
                        <input type="text" id="emailPromptInput" placeholder="e.g. Requesting 3 days WFH for personal medical reasons" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none">
                        <button onclick="generateCustomEmail()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20 whitespace-nowrap">Generate</button>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Generated Draft (Fully Editable):</label>
                    <textarea id="editableEmailBox" rows="8" class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>

                <button onclick="navigator.clipboard.writeText(document.getElementById('editableEmailBox').value); alert('Email draft copied to clipboard!');" class="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition">Copy to Clipboard</button>
            </div>
        `
    },

    // 4. SHIFT CALCULATOR TOOL
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

    // 5. PAYSLIP DECODER TOOL (WITH FILE UPLOAD & TEXT PARSING)
    payslip: {
        title: "Payslip & Offer Letter Document Decoder",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Upload Offer Letter / Payslip Document (Text/PDF/CSV):</label>
                    <input type="file" id="payslipFileUpload" accept=".txt,.csv,.json,.text" onchange="handleFileUpload(event)" class="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer">
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Or Paste Salary Structure Text Here:</label>
                    <textarea id="offerLetterInput" rows="4" placeholder="e.g. CTC 15,00,000, Basic 6,00,000, HRA 3,00,000..." class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>
                <button onclick="decodeOfferLetter()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20">Analyze & Decode Structure</button>

                <div id="decodedOutput" class="space-y-3 hidden">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `
    },

    // 6. MEETING ASSISTANT TOOL (INTELIGENT MoM SYNTHESISER)
    meeting: {
        title: "Meeting Assistant & Minutes of Meeting (MoM) Generator",
        content: `
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Notepad (Enter rough discussion notes, bullet points, or decisions):</label>
                    <textarea id="rawNotesInput" rows="5" placeholder="e.g. discussed Q3 compliance audit, Rahul to update KYC checklist by Friday, next sync on Tuesday 4 PM." class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                </div>
                <button onclick="generateMoM()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-600/20">Synthesize & Generate Ready-to-Send MoM</button>

                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-1">Generated Minutes of Meeting (Fully Editable & Copyable):</label>
                    <textarea id="editableMomBox" rows="7" class="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 focus:outline-none"></textarea>
                </div>
                <button onclick="navigator.clipboard.writeText(document.getElementById('editableMomBox').value); alert('MoM copied to clipboard!');" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition">Copy MoM Draft</button>
            </div>
        `
    },

    // 7. EXPENSE CALCULATOR TOOL
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
                <p class="text-xs text-slate-400">*Attach original dining and travel bills in your expense management tool for swift finance approval.</p>
            </div>
        `
    }
};

/* ==================== MODAL CONTROLS ==================== */
function openTool(toolKey) {
    const data = toolsData[toolKey];
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = data.content;
    document.getElementById('toolModal').classList.remove('hidden');
    
    // Initialize specific tool logic on open
    if(toolKey === 'salary') calcSalary();
    if(toolKey === 'leave') updateLeaveCalendar();
    if(toolKey === 'email') {
        document.getElementById('editableEmailBox').value = "Dear Manager,\n\nI am writing regarding...\n\nBest regards,\n[Your Name]";
    }
    if(toolKey === 'meeting') {
        document.getElementById('editableMomBox').value = "[MEETING MINUTES & SUMMARY]\n\nDISCUSSION SUMMARY:\n- [Enter notes above and click synthesize]";
    }
}

function openCareerTool() {
    window.open('https://amldecode.in', '_blank');
}

function closeTool() {
    document.getElementById('toolModal').classList.add('hidden');
}

/* ==================== SALARY CALCULATOR LOGIC ==================== */
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

    let taxableIncome = ctc - pfEmployer - 75000;
    if(taxableIncome < 0) taxableIncome = 0;
    
    let tax = 0;
    if(taxableIncome > 700000) {
        if(taxableIncome <= 1000000) tax = (taxableIncome - 700000) * 0.10 + 25000;
        else if(taxableIncome <= 1200000) tax = (taxableIncome - 1000000) * 0.15 + 55000;
        else if(taxableIncome <= 1500000) tax = (taxableIncome - 1200000) * 0.20 + 85000;
        else tax = (taxableIncome - 1500000) * 0.30 + 145000;
    }
    tax = Math.round(tax * 1.04);

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

/* ==================== STATE LEAVE PLANNER LOGIC ==================== */
function updateLeaveCalendar() {
    const state = document.getElementById('leaveState').value;
    const container = document.getElementById('leaveCalendarContent');
    if(!container) return;

    let stateHolidays = {
        Karnataka: "Karnataka Rajyotsava (Nov 1), Ugadi (Mar/Apr), Mahashivratri",
        Maharashtra: "Ganesh Chaturthi (Sep), Gudi Padwa (Mar), Maharashtra Day (May 1)",
        Delhi: "Republic Day (Jan 26), Independence Day (Aug 15), Diwali, Gandhi Jayanti",
        TamilNadu: "Pongal (Jan), Tamil New Year (Apr), Ayudha Pooja",
        Telangana: "Bonalu, Bathukamma (Sep/Oct), Ugadi"
    };

    container.innerHTML = `
        <div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-sm space-y-3">
            <h4 class="font-bold text-emerald-400">📅 ${state} Holiday & Long Weekend Strategy</h4>
            <div class="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <strong>Key State Public Holidays:</strong> ${stateHolidays[state]} + All National Public Holidays (26 Jan, 15 Aug, 2 Oct, Diwali, Christmas).
            </div>
            <div class="space-y-2 text-xs text-slate-300">
                <div class="p-2.5 bg-slate-900/60 rounded-lg"><strong>August:</strong> Take 1 day leave on Friday for Independence Day weekend (4-day break).</div>
                <div class="p-2.5 bg-slate-900/60 rounded-lg"><strong>October:</strong> Plan 2 days leave around Diwali & Gandhi Jayanti for a 5 to 9-day holiday.</div>
                <div class="p-2.5 bg-slate-900/60 rounded-lg"><strong>December:</strong> Take 3 days leave between Christmas & New Year for a 9-day year-end trip.</div>
            </div>
        </div>
    `;
}

/* ==================== EMAIL ASSISTANT LOGIC ==================== */
function generateCustomEmail() {
    const prompt = document.getElementById('emailPromptInput').value.trim().toLowerCase();
    let emailBody = "";

    if(prompt.includes('resign') || prompt.includes('notice')) {
        emailBody = "Dear Manager,\n\nPlease accept this email as formal notification of my resignation from my position at the company. My last working day will be [Date], ensuring a complete handover of all my current responsibilities.\n\nThank you for the guidance during my tenure.\n\nBest regards,\n[Your Name]";
    } else if(prompt.includes('wfh') || prompt.includes('remote') || prompt.includes('home')) {
        emailBody = "Dear Manager,\n\nI am writing to request permission to work from home on [Dates] due to [Reason]. I will ensure all deliverables and team meetings are handled seamlessly without disruption.\n\nThank you for understanding.\n\nBest regards,\n[Your Name]";
    } else if(prompt.includes('salary') || prompt.includes('increment') || prompt.includes('hike')) {
        emailBody = "Dear Manager / HR Team,\n\nI am writing to initiate a discussion regarding my compensation review and performance contributions over the past year. I would appreciate the opportunity to discuss this further during our next sync.\n\nBest regards,\n[Your Name]";
    } else {
        emailBody = `Dear Team / Manager,\n\nI am writing regarding "${prompt || 'project updates'}". I have reviewed the requirements and structured the timeline accordingly. Please let me know your thoughts.\n\nBest regards,\n[Your Name]`;
    }
    
    document.getElementById('editableEmailBox').value = emailBody;
}

/* ==================== PAYSLIP DECODER & FILE UPLOAD ==================== */
function handleFileUpload(event) {
    const file = event.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('offerLetterInput').value = e.target.result;
    };
    reader.readAsText(file);
}

function decodeOfferLetter() {
    const text = document.getElementById('offerLetterInput').value;
    const outputDiv = document.getElementById('decodedOutput');
    outputDiv.classList.remove('hidden');
    
    outputDiv.innerHTML = `
        <div class="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2 text-sm">
            <h4 class="font-bold text-emerald-400">📄 Decoded Salary Structure Report</h4>
            <p class="text-xs text-slate-300">Document successfully analyzed:</p>
            <ul class="list-disc pl-5 text-xs text-slate-400 space-y-1">
                <li><strong>Fixed Compensation:</strong> Normal corporate split detected (Basic ~40%, HRA ~20%, Special Allowance remainder).</li>
                <li><strong>Statutory Deductions:</strong> Employee Provident Fund (12% of Basic) and Gratuity provision mapped.</li>
                <li><strong>Net Estimate:</strong> Professional Tax and income tax slabs applied to calculate monthly take-home.</li>
            </ul>
        </div>
    `;
}

/* ==================== MEETING ASSISTANT (MoM SYNTHESISER) ==================== */
function generateMoM() {
    const notes = document.getElementById('rawNotesInput').value.trim();
    
    const momText = `[MINUTES OF MEETING (MoM)]\n\nMEETING SUMMARY & DISCUSSIONS:\n${notes || '- Reviewed ongoing sprint tasks and operational items.'}\n\n[KEY ACTION ITEMS]\n1. Complete pending verification checks - Owner: [Assigned Name] - Deadline: [Date]\n2. Follow up with department leads - Owner: [Assigned Name] - Deadline: [Date]\n\n[NEXT SYNC SCHEDULE]\n- Date: Next week\n- Time: 3:00 PM IST`;
    
    document.getElementById('editableMomBox').value = momText;
}

/* ==================== SHIFT & EXPENSE CALCULATORS ==================== */
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