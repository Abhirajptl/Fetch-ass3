let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;

        function storeData(){
            let name = document.getElementById('name').value;
            let age = document.getElementById('age').value;
            localStorage.setItem('Name',JSON.stringify(name));
            localStorage.setItem('Age',JSON.stringify(age));

            // document.getElementById('name').value = '';
            // document.getElementById('age').value = '';

        }

        function retrieveData(){
            let getName = JSON.parse(localStorage.getItem('Name'));
            console.log(getName);
            let getAge = JSON.parse(localStorage.getItem('Age'))
            console.log(getAge);

            let tbody = document.querySelector('table > tbody')
            let tr = document.createElement('tr')
            let td1 = document.createElement('td');
            td1.innerText = getName;
            let td2 = document.createElement('td');
            td2.innerText = getAge;

            tr.append(td1,td2)
            tbody.appendChild(tr)
            
        }

