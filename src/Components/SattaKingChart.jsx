import React, { useState, useEffect } from "react";

// --- Mock Data Generation Function ---
const generateMockData = () => {
  const data = {};
  // वर्तमान तारीख प्राप्त करें (आज है: 19 नवंबर, 2025)
  const now = new Date(); 
  const currentYear = now.getFullYear(); 
  const currentMonthIndex = now.getMonth(); // 0-based index (Nov = 10)
  const currentDay = now.getDate(); // 19
  
  // सिर्फ 2025 से 2030 तक के वर्षों को लें
  const years = ["2025", "2026", "2027", "2028", "2029", "2030"]; 

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  years.forEach(yearStr => {
    const year = parseInt(yearStr);
    if (year < 2025) return; 

    months.forEach((month, monthIndex) => {
      
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
      const monthKey = `${month}-${year}`;
      data[monthKey] = [];
      
      for (let i = 0; i < daysInMonth; i++) {
        const date = String(i + 1).padStart(2, '0');
        const day = i + 1;

        // जाँच: क्या यह तारीख भविष्य की है?
        // 1. क्या साल भविष्य का है?
        // 2. क्या साल वर्तमान है, लेकिन महीना भविष्य का है?
        // 3. क्या साल/महीना वर्तमान है, लेकिन दिन भविष्य का है?
        const isFutureDate = 
            year > currentYear || 
            (year === currentYear && monthIndex > currentMonthIndex) || 
            (year === currentYear && monthIndex === currentMonthIndex && day > currentDay); 

        let values = {};

        if (isFutureDate) {
          // यदि हाँ (भविष्य की तारीख/महीना/साल), तो सभी वैल्यू को खाली (ब्लैंक) स्ट्रिंग सेट करें
          values = {
            FARIDABAD: '',
            'FARIDABAD 2': '', // Note: This market was 'SHREE GANESH' in the header, fixing here to match mock structure.
            GHAZIABAD: '',
            GALI: '',
            DISAWAR: '',
            'DAY DELHI': '',
            GALI2: '',
            Kurukshetra: ''
          };
        } else {
          // यदि नहीं (अतीत या आज की तारीख है), तो मॉक (रैंडम) डेटा बनाएं
          values = {
            FARIDABAD: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            'FARIDABAD 2': String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            GHAZIABAD: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            GALI: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            DISAWAR: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            'DAY DELHI': String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            GALI2: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0'),
            Kurukshetra: String(Math.floor(Math.random() * 99) + 1).padStart(2, '0')
          };
        }
        
        data[monthKey].push({
          date: date,
          ...values
        });
      }
    });
  });

  return data;
};

// मॉक डेटा को एक बार जनरेट करें
const mockChartData = generateMockData();


// --- SattaKingChart Component ---
const SattaKingChart = () => {

  // डिफ़ॉल्ट रूप से आज के महीने और साल को सेट करें (2025 से आगे)
  const now = new Date();
  const defaultYear = now.getFullYear().toString();
  const defaultMonthIndex = now.getMonth(); 
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const defaultMonth = months[defaultMonthIndex];

  // सुनिश्चित करें कि डिफ़ॉल्ट साल 2025 से शुरू हो
  const initialYear = parseInt(defaultYear) >= 2025 ? defaultYear : "2025";
  const initialMonth = parseInt(defaultYear) >= 2025 ? defaultMonth : "Jan";
  
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [displayedData, setDisplayedData] = useState([]);

  // वर्षों की सूची 2025 से शुरू करें
  const years = ["2025", "2026", "2027", "2028", "2029", "2030"];


  // Filter data (यह फ़ंक्शन Dropdown बदलने पर या Submit पर चलता है)
  const filterChartData = () => {
    const key = `${selectedMonth}-${selectedYear}`;
    setDisplayedData(mockChartData[key] || []);
  };

  // कंपोनेंट लोड होने पर (या महीना/साल बदलने पर) डेटा फ़िल्टर करें
  useEffect(() => {
    filterChartData();
  }, [selectedMonth, selectedYear]);


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">

        {/* ड्रॉपडाउन (Dropdowns) */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">

          {/* महीना (Month) */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <label className="font-medium text-gray-700">Month:</label>
            <select
              className="border border-gray-300 rounded-md p-2 flex-grow"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* साल (Year) */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <label className="font-medium text-gray-700">Year:</label>
            <select
              className="border border-gray-300 rounded-md p-2 flex-grow"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* सबमिट बटन (Submit Button) */}
        <div className="flex justify-center mb-8">
          <button
            onClick={filterChartData}
            className="px-8 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300 w-full md:w-auto"
          >
            Submit
          </button>
        </div>

        {/* टाइटल (Title) */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 uppercase">
          SATTA KING BLACK MONTHLY CHART ({selectedMonth} {selectedYear})
        </h2>
        
        {/* टेबल (Table) */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">Date</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">FARIDABAD</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">SHREE GANESH</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">GHAZIABAD</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">GALI</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">DISAWAR</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">DAY DELHI</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase border-r">GALI2</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-700 uppercase">Kurukshetra</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {displayedData.length > 0 ? (
                displayedData.map((row, index) => (
                  <tr key={row.date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 text-sm font-medium text-gray-900 border-r">{row.date}</td>
                    
                    {/* Logic: If value is empty (''), display '--' */}
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row.FARIDABAD || '--'}</td>
                    {/* Assuming 'FARIDABAD 2' maps to 'SHREE GANESH' in header */}
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row['FARIDABAD 2'] || '--'}</td> 
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row.GHAZIABAD || '--'}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row.GALI || '--'}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row.DISAWAR || '--'}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row['DAY DELHI'] || '--'}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold border-r">{row.GALI2 || '--'}</td>
                    <td className="px-3 py-2 text-sm text-red-600 font-extrabold">{row.Kurukshetra || '--'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-3 py-4 text-center text-sm text-gray-500">
                    No data available for this selection.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default SattaKingChart;