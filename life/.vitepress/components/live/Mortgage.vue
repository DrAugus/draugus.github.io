<script>
export default {
    data() {
        return {
            downPaymentRatio: 30, //首付比例
            loanAmount: null, // 贷款总额(万)
            loanRate: 3.1, // 贷款年利率
            loanPeriod: 30, // 贷款周期
            repaymentType: '等额本息', // 还款方式
            repaymentResults: [], // 还款结果
        }
    },
    methods: {
        // 计算还款结果
        calculate() {
            const downPaymentRatio = this.downPaymentRatio / 100
            const loanAmount = this.loanAmount * (1 - downPaymentRatio) * 10000 // 贷款总额(万)
            const loanRate = this.loanRate / 100 // 贷款年利率
            const loanPeriod = this.loanPeriod * 12 // 贷款总期数
            const repaymentType = this.repaymentType // 还款方式
            const repaymentResults = [] // 还款结果
            let balance = loanAmount // 剩余本金

            let condition = downPaymentRatio && loanAmount && loanRate
            console.log('wtf:', condition, downPaymentRatio, loanAmount, loanRate, loanPeriod, repaymentType)
            if (!condition) return;


            if (repaymentType === '等额本息') { // 等额本息
                const monthlyRepayment = (loanAmount * loanRate * Math.pow(1 + loanRate, loanPeriod)) / (Math.pow(1 + loanRate, loanPeriod) - 1) // 每月还款金额
                for (let i = 1; i <= loanPeriod; i++) {
                    const interest = (balance * loanRate).toFixed(2) // 每月还款利息
                    const principal = (monthlyRepayment - interest).toFixed(2) // 每月还款本金
                    balance = (balance - principal).toFixed(2) // 剩余本金
                    const repayment = (parseFloat(interest) + parseFloat(principal)).toFixed(2) // 每月应还款金额
                    repaymentResults.push({
                        repayment,
                        principal,
                        interest,
                        balance
                    })
                }
            } else if (repaymentType === '等额本金') { // 等额本金
                const monthlyPrincipal = (loanAmount / loanPeriod).toFixed(2) // 每月还款本金
                for (let i = 1; i <= loanPeriod; i++) {
                    const interest = (balance * loanRate).toFixed(2) // 每月还款利息
                    const principal = monthlyPrincipal // 每月还款本金
                    balance = (balance - principal).toFixed(2) // 剩余本金
                    const repayment = (parseFloat(interest) + parseFloat(principal)).toFixed(2) // 每月应还款金额
                    repaymentResults.push({
                        repayment,
                        principal,
                        interest,
                        balance
                    })
                }
            }
            this.repaymentResults = repaymentResults // 更新还款结果
        }
    }
}

</script>


<template>
    <div>
        <form v-on:submit.prevent>
            <div>
                <label>首付比例(%)</label>
                <input type="number" min="30" max="100" v-model.number="downPaymentRatio">
            </div>
            <div>
                <label>贷款总额(万)</label>
                <input type="number" v-model.number="loanAmount">
            </div>
            <div>
                <label>贷款年利率</label>
                <input type="number" step="0.01" v-model.number="loanRate">
            </div>
            <div>
                <label>贷款周期</label>
                <select v-model="loanPeriod">
                    <option v-for="n in 30" :value="n">{{ n }}年</option>

                </select>
            </div>
            <div>
                <label>还款方式</label>
                <select v-model="repaymentType">
                    <option value="等额本息">等额本息</option>
                    <option value="等额本金">等额本金</option>
                </select>
            </div>
            <div>
                <button v-on:click="calculate">计算</button>
            </div>
        </form>
        <div>
            <div v-if="repaymentResults.length">
                <table>
                    <tbody>
                        <tr>
                            <th>期数</th>
                            <th>还款金额</th>
                            <th>还款本金</th>
                            <th>还款利息</th>
                            <th>剩余本金</th>
                        </tr>
                        <tr v-for="(row, index) in repaymentResults" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ row.repayment }}</td>
                            <td>{{ row.principal }}</td>
                            <td>{{ row.interest }}</td>
                            <td>{{ row.balance }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<style scoped>
form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-top: 24px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    color: #333;
}

input,
textarea {
    display: block;
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 18px;
    color: #333;
    resize: none;
}

input:focus,
textarea:focus {
    outline: none;
    box-shadow: 0 0 4px #6ac5f7;
    border-color: #6ac5f7;
}

button {
    display: inline-block;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #222;
    padding: 8px 16px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #f0f0f0;
}

select {
    position: relative;
    display: inline-block;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #222;
    padding: 8px;
    cursor: pointer;

    text-transform: uppercase;
    transition: background-color 0.2s ease;
}

select:before {
    content: "\25bc";
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
}

select:hover {
    background-color: #f0f0f0;
}

select option {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 8px;
    width: 100%;
    z-index: 10;
}

select option.show {
    display: block;
}

select option {
    display: block;
    padding: 4px;
    cursor: pointer;
}

select option:hover {
    background-color: #f0f0f0;
}
</style>
