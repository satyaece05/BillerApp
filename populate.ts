import {database, initializeApp} from 'firebase';
import {firebaseConfig} from './src/environments/firebase.config';
import {dbData} from './db-data';


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const coursesRef = database().ref('courses');


dbData.courses.forEach( course => {

  console.log('adding course', course.price);

  const courseRef = coursesRef.push({
      name: course.name,
      price: course.price
  });

});
