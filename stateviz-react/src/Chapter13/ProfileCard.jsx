import Card from "./Card";

function ProfileCard(props) {
    return (
      <div>
        <Card title="ABCD" background="lightblue">
          <p>ㅎ2</p>
          <p>리액트 공부중</p>
        </Card>
        <Card title="EFDG" background="lightgreen">
          <p>ㅎ3</p>
          <p>익스프레스 공부중</p>
        </Card>
      </div>
    );
  }

export default ProfileCard;