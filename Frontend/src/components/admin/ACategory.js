import axios from 'axios';
const ACategory=({category})=>
{
    const deleteCategory=(id)=>
    {
        let token = `Bearer ${sessionStorage.getItem("data")}`;
        axios.delete(`http://localhost:8080/admin/delete/category/${id}`, { headers: { Authorization: token } }).then
            (
                (response) => {
                    alert("deleted!")
                }, (error) => {
                alert(error);
            }
            );
    }
    return(
        <tr>
        <td>{category.cId}</td>
        <td>{category.name}</td>
        
        <td>
            
            <button class="btn btn-danger btn-sm" onClick={deleteCategory(category.id)}>Delete</button>
        </td>
    </tr>
    );

}

export default ACategory;