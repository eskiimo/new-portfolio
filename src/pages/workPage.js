import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import MyModal from '../components/UIelements/Modal';
import './workPage.css';
const PROJECT_LIST = [
 {
  logo:
   'https://scontent.fcai1-2.fna.fbcdn.net/v/t1.6435-9/121069964_3496817150394950_6016076511336555736_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeG-S3TysnNSsUySVfk6Mtpcru0hatbO83Ou7SFq1s7zc5cnnpjD0a8gS8PTsI_BAFnFoF8xFQw-kRzcO_-BfbNA&_nc_ohc=HNXzGo5UiA0AX_cjr58&_nc_ht=scontent.fcai1-2.fna&oh=00_AT8wIv-u3W5_a-KfOjyTtcZDzD1ZbM00NJd5NmYzW0CHuQ&oe=61E63EF1',
  name: 'harth',
  image:
   'https://scontent.fcai1-2.fna.fbcdn.net/v/t1.6435-9/121069964_3496817150394950_6016076511336555736_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeG-S3TysnNSsUySVfk6Mtpcru0hatbO83Ou7SFq1s7zc5cnnpjD0a8gS8PTsI_BAFnFoF8xFQw-kRzcO_-BfbNA&_nc_ohc=HNXzGo5UiA0AX_cjr58&_nc_ht=scontent.fcai1-2.fna&oh=00_AT8wIv-u3W5_a-KfOjyTtcZDzD1ZbM00NJd5NmYzW0CHuQ&oe=61E63EF1',

  p1: ' Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!',
  p2: 'Built the Front End with Flutter -cross platform framework- so the application is available on Google Play Store and Apple Store',
 },
 {
  logo:
   'https://scontent.fcai1-2.fna.fbcdn.net/v/t1.6435-9/120385343_3457347237675275_7997133935383516279_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE-6xHeiYKOVr_efVgMXZ5MzPvnGqcKVgbM--capwpWBjzmJNTpARkHCCr25fYwKUpvByi_pehO-5DLHOiCTHrj&_nc_ohc=MNBgP_f0yfQAX-PsKNP&tn=dXZ6-OeLT3y2veP3&_nc_ht=scontent.fcai1-2.fna&oh=00_AT96N0_irQwBuZXZJ3HC3jjs7c7louTBbstIO4C1HQT7Tg&oe=61E802F8',
  name: 'de7k',
  image:
   'https://scontent.fcai1-2.fna.fbcdn.net/v/t1.6435-9/120385343_3457347237675275_7997133935383516279_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE-6xHeiYKOVr_efVgMXZ5MzPvnGqcKVgbM--capwpWBjzmJNTpARkHCCr25fYwKUpvByi_pehO-5DLHOiCTHrj&_nc_ohc=MNBgP_f0yfQAX-PsKNP&tn=dXZ6-OeLT3y2veP3&_nc_ht=scontent.fcai1-2.fna&oh=00_AT96N0_irQwBuZXZJ3HC3jjs7c7louTBbstIO4C1HQT7Tg&oe=61E802F8',

  p1: ' Harith application The fastest way to buy and sell crops, farm equipment  and everything related to agriculture and farmers You can display products near you and choose the categories that suit your needs Please have apleasant experience!',
  p2: 'Built the Front End with Flutter -cross platform framework- so the application is available on Google Play Store and Apple Store',
 },
];
export const RenderProjectCards = (props) =>
 props.list.map((project, index) => {
  return (
   <Col xs="12" sm="6" md="4" lg="3">
    <div
     onClick={() => {
      props.onClick(index);
     }}
     className="project-card"
    >
     <img src={project.image} alt={project.name} />
    </div>
   </Col>
  );
 });

const Work = () => {
 const [isOpen, setisOpen] = useState(false);

 const showModal = () => {
  setisOpen(true);
 };
 const hideModal = () => {
  setisOpen(false);
 };
 const [selectedProject, setSelProject] = useState(PROJECT_LIST[0]);
 const handleOnClick = (index) => {
  setSelProject(PROJECT_LIST[index]);
  console.log(index);
  showModal();
 };
 return (
  <React.Fragment>
   <MyModal
    project={selectedProject}
    shown={isOpen}
    hide={hideModal}
    show={showModal}
   />
   <div className="work-container">
    <Row className="cards-row">
     <RenderProjectCards list={PROJECT_LIST} onClick={handleOnClick} />
    </Row>
   </div>
  </React.Fragment>
 );
};
export default Work;
