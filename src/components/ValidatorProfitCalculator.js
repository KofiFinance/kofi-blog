import React, { useState, useEffect } from 'react';
import styles from './ValidatorProfitCalculator.module.css'; // We'll create this CSS module next

export default function ValidatorProfitCalculator() {
    const [amountStaked, setAmountStaked] = useState(3693980); // Default 1M APT
    const [aptPrice, setAptPrice] = useState(5); // Default $8
    const [aprPercent, setAprPercent] = useState(3.79); // Default 7%
    const [commissionRatePercent, setCommissionRatePercent] = useState(5); // Default 5% Commission
    const [validatorCost, setValidatorCost] = useState(35000); // Default $35,000
    const [profit, setProfit] = useState(0);

    // Recalculate profit whenever an input changes
    useEffect(() => {
        const aprDecimal = parseFloat(aprPercent) / 100;
        const commissionDecimal = parseFloat(commissionRatePercent) / 100; // Convert commission % to decimal
        const totalRewards = parseFloat(amountStaked) * aprDecimal * parseFloat(aptPrice);
        const validatorCommissionEarned = totalRewards * commissionDecimal; // Calculate validator's share
        const calculatedProfit = validatorCommissionEarned - parseFloat(validatorCost);

        // Handle NaN case if inputs are invalid/empty
        setProfit(isNaN(calculatedProfit) ? 0 : calculatedProfit);
    }, [amountStaked, aptPrice, aprPercent, commissionRatePercent, validatorCost]);

    // Helper to format numbers as currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    // Helper to format large numbers with commas
    const formatNumber = (value) => {
        return new Intl.NumberFormat('en-US').format(value);
    };


    return (
        <div className={styles.calculator}>
            <h4>Validator Profitability Calculator</h4>
            <div className={styles.inputGroup}>
                <label htmlFor="amountStaked">Total Stake Delegated (APT):</label>
                <input
                    type="number"
                    id="amountStaked"
                    value={amountStaked}
                    onChange={(e) => setAmountStaked(e.target.value)}
                    placeholder="e.g., 1000000"
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="aptPrice">APT Price ($):</label>
                <input
                    type="number"
                    id="aptPrice"
                    value={aptPrice}
                    onChange={(e) => setAptPrice(e.target.value)}
                    placeholder="e.g., 8"
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="aprPercent">Network Staking APR (%):</label>
                <input
                    type="number"
                    id="aprPercent"
                    value={aprPercent}
                    onChange={(e) => setAprPercent(e.target.value)}
                    placeholder="e.g., 7"
                    step="0.01"
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="commissionRatePercent">Validator Commission Rate (%):</label>
                <input
                    type="number"
                    id="commissionRatePercent"
                    value={commissionRatePercent}
                    onChange={(e) => setCommissionRatePercent(e.target.value)}
                    placeholder="e.g., 5"
                    step="0.1"
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="validatorCost">Annual Validator Infrastructure Cost ($):</label>
                <input
                    type="number"
                    id="validatorCost"
                    value={validatorCost}
                    onChange={(e) => setValidatorCost(e.target.value)}
                    placeholder="e.g., 35000"
                />
            </div>
            <div className={styles.result}>
                <strong>Estimated Annual Profit:</strong>
                <span className={profit >= 0 ? styles.positive : styles.negative}>
                    {formatCurrency(profit)}
                </span>
                <div className={styles.calculation}>
                    ( {formatNumber(amountStaked)} APT × ${aptPrice} × {aprPercent}% APR  × {commissionRatePercent}% Commission ) - {formatCurrency(validatorCost)}
                </div>
            </div>
        </div>
    );
} 