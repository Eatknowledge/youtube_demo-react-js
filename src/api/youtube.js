import axios from 'axios';

export default axios.create({
 baseURL:"https://www.googleapis.com/youtube/v3",
 params:{
part:"snippet",
maxResult: 5,
key:"AIzaSyDmFbPsnJdBWW10-DwgFQEr3dsbZVkbuYI"
 }

});