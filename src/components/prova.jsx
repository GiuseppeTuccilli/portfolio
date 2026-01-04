function Prova() {
  return (
    <>
      <div className=" p-2 pt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[3.4em]">
        <div className="bg-blue-400  ">
          <p className="text-center my-3">prova</p>
        </div>
        <div className="bg-red-400  ">
          <p className="text-center my-3">prova</p>
        </div>
        <div className="bg-yellow-400  ">
          <p className="text-center my-3">prova</p>
        </div>
        <div className="bg-green-400  ">
          <p className="text-center my-3">prova</p>
        </div>
        <button className="hover:cursor-pointer hover:bg-blue-400 bg-blue-500  rounded-3xl">
          <span className="icon-[tabler--user-circle] text-2xl mt-1"></span>
        </button>
      </div>
    </>
  );
}

export default Prova;
