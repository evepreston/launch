import { useState } from 'react';

export default function BreakEvenCalculator() {
  const [ehr, setEhr] = useState(70);
  const [insurance, setInsurance] = useState(35);
  const [phone, setPhone] = useState(30);
  const [rent, setRent] = useState(0);
  const [other, setOther] = useState(50);
  const [rate, setRate] = useState(150);
  const [clientsPerWeek, setClientsPerWeek] = useState(20);

  const totalExpenses = ehr + insurance + phone + rent + other;
  const sessionsToBreakEven = rate > 0 ? Math.ceil(totalExpenses / rate) : 0;
  const monthlyGross = clientsPerWeek * 4.33 * rate;
  const netAnnual = (monthlyGross - totalExpenses) * 12;

  const field = (label: string, value: number, setValue: (v: number) => void, prefix = '$') => (
    <div>
      <label className="block text-sm font-medium text-[#2f3b2f] mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <span className="text-[#5c6b52]">{prefix}</span>
        <input
          type="number"
          value={value}
          min={0}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full border border-[#d8d2bd] rounded-lg px-3 py-2 bg-white text-[#2f3b2f] focus:outline-none focus:ring-2 focus:ring-[#9bc18a]"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-[#f3f7ee] rounded-2xl p-6 mt-6">
      <h3 className="font-semibold text-[#2f3b2f] mb-1">Break-Even Calculator</h3>
      <p className="text-sm text-[#5c6b52] mb-5">
        Here's exactly what you need to cover your costs.
      </p>
      <p className="text-sm font-medium text-[#2f3b2f] mb-2">Monthly expenses</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {field('EHR / telehealth', ehr, setEhr)}
        {field('Insurance', insurance, setInsurance)}
        {field('Phone & fax', phone, setPhone)}
        {field('Rent (if applicable)', rent, setRent)}
        {field('Other', other, setOther)}
      </div>
      <p className="text-sm font-medium text-[#2f3b2f] mb-2">Your practice</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {field('Session rate', rate, setRate)}
        {field('Clients per week', clientsPerWeek, setClientsPerWeek, '')}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 text-center border border-[#e7e2d3]">
          <p className="text-sm text-[#5c6b52]">Sessions needed per month to break even</p>
          <p className="text-2xl font-semibold text-[#6f9c63]">{sessionsToBreakEven}</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-[#e7e2d3]">
          <p className="text-sm text-[#5c6b52]">Estimated net annual income</p>
          <p className="text-2xl font-semibold text-[#6f9c63]">
            ${netAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
    </div>
  );
}
