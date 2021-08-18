const showDetailsPage = async (id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    const employee = await response.json();
    document.getElementById("pageList").style.display = 'none';
    document.getElementById("pageDetails").style.display = 'block';

    document.getElementById("employeeId").innerHTML = employee.id;
    document.getElementById("employeeName").innerHTML = employee.name;
    document.getElementById("employeeAge").innerHTML = employee.age;
    document.getElementById("employeeBiography").innerHTML = employee.biography;
}

const showListPage = async() => {
    document.getElementById("pageList").style.display = 'block';
    document.getElementById("pageDetails").style.display = 'none';
    document.getElementById("pageCreate").style.display = 'none';
    document.getElementById("pageUpdate").style.display = 'none';

    const response = await fetch("http://localhost:3000/employees");
    const employees = await response.json();
    document.getElementById("table").style.display = 'block';
    document.getElementById("loader").style.display = 'none';
    document.getElementById("employees").innerHTML = '';
    for (const employee of employees) {
        document.getElementById("employees").innerHTML = 
        document.getElementById("employees").innerHTML + 
        `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>
                <button onclick='showDetailsPage(${employee.id})'>Details</button>
                <button onclick='showUpdatePage(${employee.id})'>Update</button>
                <button onclick='deleteEmployee(${employee.id})'>Delete</button>
            </td>  
        </tr>`
    }
}

const showCreatePage = () => {
    document.getElementById("pageList").style.display = 'none';
    document.getElementById("pageCreate").style.display = 'block';
}

const showUpdatePage = async (id) => {
    document.getElementById("pageList").style.display = 'none';
    document.getElementById("pageUpdate").style.display = 'block';

    const response = await fetch(`http://localhost:3000/employees/${id}`);
    const employee = await response.json();

    document.getElementById("employeeIdInputUpdate").value = employee.id;
    document.getElementById("employeeNameInputUpdate").value = employee.name;
    document.getElementById("employeeAgeInputUpdate").value = employee.age;
    document.getElementById("employeeBiographyInputUpdate").value = employee.biography;
}

const createEmployee = () => {
    const employeeObject = {
        id: document.getElementById("employeeIdInput").value,
        name: document.getElementById("employeeNameInput").value,
        age: document.getElementById("employeeAgeInput").value,
        biography: document.getElementById("employeeBiographyInput").value
    }
    fetch('http://localhost:3000/employees', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeObject),
      })
}

const updateEmployee = () => {
    const employeeObject = {
        id: document.getElementById("employeeIdInputUpdate").value,
        name: document.getElementById("employeeNameInputUpdate").value,
        age: document.getElementById("employeeAgeInputUpdate").value,
        biography: document.getElementById("employeeBiographyInputUpdate").value
    }
    fetch(`http://localhost:3000/employees/${employeeObject.id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeObject),
      })
}

const deleteEmployee = (id) => {
    if(confirm("Delete selected employee?")){
        fetch(`http://localhost:3000/employees/${id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        }
      })
    }
}


const startApp = async() => {
    await showListPage();
}

startApp();
