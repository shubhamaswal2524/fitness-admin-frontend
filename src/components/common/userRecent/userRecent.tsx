"use client";
interface ProfileCardProps {
  fooddata: any;
}

const UserRecent = ({ fooddata }: ProfileCardProps) => {
  return (
    <>
      <div className="user_recent">
        <h1 className="deit_plan">Today deit plan</h1>
        <div className="text_content">
          <ul>
            {fooddata.map((item: any, index: number) => (
              <li key={index}>
                <h2>{item.title}</h2>
                <h5>
                  <span>{item.food}</span>
                  {item.foodvalue}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserRecent;
