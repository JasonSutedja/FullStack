function getData(){
    fetch('https://gorest.co.in/public/v1/users')
    .then(res=>res.json())
    .then(res=>{
        let li =`<tr>
                    <th>Full Name</th>
                    <th>Status Account</th>
                    <tr>
                        <td>
                            ${res.data.name}
                        </td>
                        <td>
                            ${res.data.status}
                                
                        </td>
                    </tr>
                </tr>
                <tr>
                    <th>AccoundID</th>
                    <tr>
                        <td>
                            ${res.data.id}
                        </td>
                    </tr>
                </tr>
                <tr>
                    <th>Gender<th>
                    <tr>
                        <td>
                            ${res.data.gender}
                        </td>
                    </tr>
                </tr>
                <tr>
                    <th>Email<th>
                    <tr>
                        <td>
                            ${res.data.email}
                            </td>
                            <td class="buttonTd">
                                <a href="listCustomer.html">
                                    <button> Back </button> 
                                </a>
                            </td>
                    </tr>
                </tr>`
            console.log(res.data)
            document.getElementById("listDetail").innerHTML = li;
        })
    // .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
var list_items = getData()