
function getData(){
    fetch('https://gorest.co.in/public/v1/users')
    .then(res=>res.json())
    .then(res=>{
        // let page = 1;
        // let rows = 5;
        // let start = rows * page;
	    // let end = start + rows;
	    // let paginatedItems = res.data.slice(start, end);
        
        let li =`<tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>`
        // //for (res.data === 0; res.data<paginatedItems.length; res.data++){
        //     let item_element = document.createElement('div');
        //     item_element.classList.add('item') 
        //     item_element.innerText = item
        
        // }
        res.data.forEach( data => {
            if( data.status  == "active"){
                li +=  
                `<div class="item">
                    <tr>
                        <td>
                            ${data.name} <br> ${data.email}
                        </td>   
                    
                        <td class="status_green">
                            <span class="dot"></span>
                            ${data.status}
                        </td>  
                        <td> 
                            <a href="Customer_details.html">
                                <button> View Cust </button> 
                            </a>
                        </td>
                    </tr>
                </div>`
            } else if ( data.status  == "inactive") {
                li +=  
                `<div class="item">
                    <tr>
                    <td>
                        ${data.name} <br> ${data.email}
                    </td>
                    
                    <td class="status_red">
                        <span class="dot"></span>
                        ${data.status}
                    </td>  
                    <td> 
                        <a href="Customer_details.html">
                            <button> View Cust </button> 
                        </a>
                    </td>
                    </tr>
                </div>`
            }
        });
            console.log(res.data)
            document.getElementById("list").innerHTML = li;
        })
    // .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

 var list_items = getData()
