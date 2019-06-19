import React from "react";
import './AddNewVideo.css'

export default class AddNewVideo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>Title</label>
                    <input type="text"></input>
                    <label>URL</label>
                    <input type="text" />
                    <button>Add Video</button>
                </div>
                <table>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bunny story</td>
                        <td>http://media.w3.org/2010/05/bunny/trailer.mp4</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        <td>Approve</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bunny story</td>
                        <td>http://media.w3.org/2010/05/bunny/trailer.mp4</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        <td>Approve</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bunny story</td>
                        <td>http://media.w3.org/2010/05/bunny/trailer.mp4</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        <td>Approve</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bunny story</td>
                        <td>http://media.w3.org/2010/05/bunny/trailer.mp4</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        <td>Approve</td>
                    </tr>
                </table>
            </div>
        );
    }
}
