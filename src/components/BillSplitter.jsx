import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const BillSplitter = () => {
  const [preTaxAmount, setPreTaxAmount] = useState('');
  const [splitWays, setSplitWays] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [customTip, setCustomTip] = useState('');
  const [result, setResult] = useState(0);

  const calculateSplit = () => {
    const amount = parseFloat(preTaxAmount);
    const people = parseInt(splitWays);
    const tip = tipPercentage === 'custom' ? parseFloat(customTip) : tipPercentage;
    
    if (isNaN(amount) || isNaN(people) || people <= 0 || isNaN(tip)) {
      setResult(0);
      return;
    }

    const taxRate = 0.08; // Assuming 8% tax rate
    const totalWithTax = amount * (1 + taxRate);
    const totalWithTip = totalWithTax * (1 + tip / 100);
    const perPerson = totalWithTip / people;

    setResult(perPerson.toFixed(2));
  };

  useEffect(() => {
    calculateSplit();
  }, [preTaxAmount, splitWays, tipPercentage, customTip]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Bill Splitter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pre-tax Amount</label>
          <Input
            type="number"
            value={preTaxAmount}
            onChange={(e) => setPreTaxAmount(e.target.value)}
            placeholder="Enter pre-tax amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
          <Input
            type="number"
            value={splitWays}
            onChange={(e) => setSplitWays(e.target.value)}
            placeholder="Enter number of people"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tip Percentage</label>
          <ToggleGroup type="single" value={tipPercentage} onValueChange={(value) => setTipPercentage(value || tipPercentage)}>
            {[15, 18, 20, 25].map((tip) => (
              <ToggleGroupItem key={tip} value={tip} aria-label={`${tip}% tip`}>
                {tip}%
              </ToggleGroupItem>
            ))}
            <ToggleGroupItem value="custom" aria-label="Custom tip">
              Custom
            </ToggleGroupItem>
          </ToggleGroup>
          {tipPercentage === 'custom' && (
            <Input
              type="number"
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              placeholder="Enter custom tip %"
              className="mt-2"
            />
          )}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Each Person Owes:</h3>
          <p className="text-3xl font-bold">${result}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillSplitter;