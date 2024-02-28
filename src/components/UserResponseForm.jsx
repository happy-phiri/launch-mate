/* eslint-disable react/prop-types */
const UserResponseForm = ({
  handleSubmit,
  handleChange,
  title,
  description,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-purple-500 border-b-0 rounded-t-lg bg-transparent p-3 mb-0 focus:outline-none w-full font-poppins font-light placeholder:font-montserrat"
        placeholder="Title"
        value={title}
        name="title"
        autoComplete="off"
        onChange={handleChange}
      />
      <textarea
        onChange={handleChange}
        value={description}
        name="description"
        id="description"
        rows="3"
        placeholder="Description"
        className="border border-t-0 border-purple-500 rounded-b-lg bg-transparent px-3 focus:outline-none resize-none w-full  font-poppins font-light placeholder:font-montserrat"></textarea>

      <button className="font-montserrat border border-purple-500 hover:bg-purple-500 hover:text-slate-100 rounded-lg px-6 py-2 block mt-3">
        Submit
      </button>
    </form>
  );
};

export default UserResponseForm;
