//新增薪水資料
function creatSalarySystem(employeeCode, salaryDate, salaryEmployeeCode) {
    let salaryData = { employeeCode: employeeCode, salaryDate: salaryDate, salaryEmployeeCode: salaryEmployeeCode }
    $.ajax({
        url: 'http://localhost:8080/api/creatSalarySystem',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(salaryData),
        success: function (SalarySystemRes) {
            $('#employeeCode').empty()
            $('#name').empty()
            $('#salaryDate').empty()
            $('#salary').empty()
            $('#raise_pay').empty()
            $('#manager_raise_pay').empty()
            $('#salary_deduct').empty()
            $('#total_salary').empty()
            let { message, salarySystem } = SalarySystemRes
            alert(message)
            $('#salaryInfo').hide()
            $('#salaryInfo').show(1500)
            $('#employeeCode').append(`員工編號 : ${salarySystem.employeeCode}`)
            $('#name').append(`員工姓名 : ${salarySystem.name}`)
            $('#salaryDate').append(`薪資日期 : ${salarySystem.salaryDate}`)
            $('#salary').append(`底薪 : ${salarySystem.salary}`)
            $('#raise_pay').append(`一般加給 : ${salarySystem.raisePay}`)
            $('#manager_raise_pay').append(`主管加給 : ${salarySystem.managerRaisePay}`)
            $('#salary_deduct').append(`逞罰 : ${salarySystem.salaryDeduct}`)
            $('#total_salary').append(`總薪資 : ${salarySystem.totalSalary}`)


        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//員工搜尋資料
function searchSalarySystemForStaff(employeeCode, startDate, endDate) {
    let salaryData = { employeeCode: employeeCode, searchStartDate: startDate, searchEndDate: endDate }
    $('#employeeCode').empty()
    $('#updateDiv').empty()
    $('#startDate').empty()
    $('#endDate').empty()
    $.ajax({
        url: 'http://localhost:8080/api/searchSalarySystemForStaff',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(salaryData),
        success: function (SalarySystemRes) {
            $('#searchSalaryInfoList').empty()
            let { message, salarySystemList } = SalarySystemRes
            if (message != null) {
                alert(message)
            }
            let i = 0;
            for (let item of salarySystemList) {
                i++;
                $('#searchSalaryInfoList').append(`
                <li class="list-group-item d-flex align-items-center gap-3">
                <hr/>
                <label class="">${i}.  編號 : ${item.employeeCode} 狗名 : ${item.name}  薪資日期 : ${item.salaryDate}  底薪 : ${item.salary} 一般加給 : ${item.raisePay}  主管加給 : ${item.managerRaisePay}  逞罰 : ${item.salaryDeduct}  總薪資 : ${item.totalSalary}</label>

                </li>
            `)
            }
        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//剛開始登入綁定員工帳號 (可以不用)
function salarySystemEmployeeCodeLogin(stringemployeeCode) {
    let salaryData = { employeeCode: stringemployeeCode }
    $.ajax({
        url: 'http://localhost:8080/api/salarySystemEmployeeCodeLogin',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(salaryData),
        success: function (SalarySystemRes) {
            window.location.href = 'http://127.0.0.1:5501/work-system-boss/work-boss.html'//這邊可以槓掉
            $('#logCode').empty()
            let { message } = SalarySystemRes
            if (message != null) {
                alert(message)
            }
        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
