/* eslint-disable react/prop-types */
const SummaryCard = ({ arr, name, showModal }) => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium font-montserrat">{name}</h3>

      {arr &&
        arr.map((item) => {
          return (
            <div key={item.title} className="mb-2">
              <p className="font-normal text-sm">{item.title}</p>
              {showModal && (
                <p className="font-light text-sm">{item.description}</p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SummaryCard;
