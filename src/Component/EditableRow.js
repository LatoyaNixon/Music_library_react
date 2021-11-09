import React from "react";
import ReadOnlyRow from "./ReadOnlyRow";

const EditableRow = () => {
    return (
            <tr>
                <td>
                   <input
                   type="text"
                   requried="requried"
                   placeholder="Enter a title.."
                   name="song title"
                   ></input> 
                </td>
                <td>
                <input
                   type="text"
                   requried="requried"
                   placeholder="Enter an album.."
                   name="album"
                   ></input> 
                </td>
                <td>
                <input
                   type="text"
                   requried="requried"
                   placeholder="Enter an artist.."
                   name="artist"
                   ></input>
                </td>
                <td>
                <input
                   type="text"
                   requried="requried"
                   placeholder="Enter genre.."
                   name="genre"
                   ></input>
                </td>
                <td>
                <input
                   type="text"
                   requried="requried"
                   placeholder="Enter release date.."
                   name="release date"
                   ></input> 
                </td>
            </tr>
        
        
    )
}

export default ReadOnlyRow;