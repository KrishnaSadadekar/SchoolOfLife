import axios from 'axios';
import { useEffect } from "react";
import { ErroAlert } from '../SweetAlert';

const ATrainers = ({ trainer }) => {

       return (
        <tr>
            <td>{trainer.id}</td>
            <td>{trainer.name}</td>
            <td>{trainer.lastName}</td>
            <td>
               
                {/* <button class="btn btn-danger btn-sm" onClick={deleteTrainer(trainer.id)}>Delete</button> */}
            </td>
        </tr>
    );

}

export default ATrainers;