/*
人民币转大写
*/
/* eslint-disable */
export function formatMoney(money) {
	// 汉字的数字
	const cnNums = new Array(
		'零',
		'壹',
		'贰',
		'叁',
		'肆',
		'伍',
		'陆',
		'柒',
		'捌',
		'玖'
	)
	// 基本单位
	const cnIntRadice = new Array('', '拾', '佰', '仟')
	// 对应整数部分扩展单位
	const cnIntUnits = new Array('', '万', '亿', '兆')
	// 对应小数部分单位
	const cnDecUnits = new Array('角', '分', '毫', '厘')
	// 整数金额时后面跟的字符
	const cnInteger = '整'
	// 整型完以后的单位
	const cnIntLast = '元'
	// 最大处理的数字
	const maxNum = 999999999999999.9999
	// 金额整数部分
	let IntegerNum
	// 金额小数部分
	let DecimalNum
	// 输出的中文金额字符串
	let ChineseStr = ''
	// 分离金额后用的数组，预定义
	let parts
	if (money == '') {
		return ''
	}
	money = parseFloat(money)
	if (money >= maxNum) {
		alert('超出最大处理数字')
		return ''
	}
	if (money == 0) {
		ChineseStr = cnNums[0] + cnIntLast + cnInteger
		return ChineseStr
	}
	// 转换为字符串
	money = money.toString()
	if (money.indexOf('.') == -1) {
		IntegerNum = money
		DecimalNum = ''
	} else {
		parts = money.split('.')
		IntegerNum = parts[0]
		DecimalNum = parts[1].substr(0, 4)
	}
	// 获取整型部分转换
	if (parseInt(IntegerNum, 10) > 0) {
		let zeroCount = 0
		const IntLen = IntegerNum.length
		for (var i = 0; i < IntLen; i++) {
			var n = IntegerNum.substr(i, 1)
			const p = IntLen - i - 1
			const q = p / 4
			const m = p % 4
			if (n == '0') {
				zeroCount++
			} else {
				if (zeroCount > 0) {
					ChineseStr += cnNums[0]
				}
				zeroCount = 0 // 归零
				ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
			}
			if (m == 0 && zeroCount < 4) {
				ChineseStr += cnIntUnits[q]
			}
		}
		ChineseStr += cnIntLast
	}
	// 小数部分
	if (DecimalNum != '') {
		const decLen = DecimalNum.length
		for (var i = 0; i < decLen; i++) {
			var n = DecimalNum.substr(i, 1)
			if (n != '0') {
				ChineseStr += cnNums[Number(n)] + cnDecUnits[i]
			}
		}
	}
	if (ChineseStr == '') {
		ChineseStr += cnNums[0] + cnIntLast + cnInteger
	} else if (DecimalNum == '') {
		ChineseStr += cnInteger
	}
	return ChineseStr
}
