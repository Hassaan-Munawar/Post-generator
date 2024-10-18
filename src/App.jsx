import './App.css';
import Card from './Components/Card/Card';

let Username = prompt('Enter your name')
let Userimage = prompt('Your Profile image url')
let Userpost = prompt('Your Post image url')
let Userdescription = prompt('Your Post description')



function App() {
  return (
        <Card userName={Username || 'Muhammad Hassaan'} profileImage ={Userimage || 'https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png'}  postImage ={Userpost || 'https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9'} postDescription ={Userdescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
  );
}

export default App;
