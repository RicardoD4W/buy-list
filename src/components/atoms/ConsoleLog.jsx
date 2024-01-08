import { useMainStore } from "../../stores/mainStore";

const ConsoleLog = () => {
  const { userData } = useMainStore();

  return (
    <div className="absolute bottom-0 left-0 z-50 flex flex-col invisible max-w-xs gap-3 p-5 overflow-scroll text-white bg-gray-700 border border-white rounded opacity-25 md:visible">
      <p className="text-xs text-gray-300">
        ConsoleLog.jsx --&gt; ./src/components
      </p>
      <p className="border-b">
        Usuario:{" "}
        <span className="font-medium max-w-[400px] max-h-40 overflow-y-scroll">
          {JSON.stringify(userData)}
        </span>{" "}
      </p>
      {/* <p className="border-b">
        emailLogin: <span className="font-medium ">{emailLogin}</span>{" "}
      </p>
      <p className="border-b">
        passwordLogin: <span className="font-medium ">{passwordLogin}</span>{" "}
      </p>
      <p className="border-b">
        dataLogin: <span className="font-medium ">{dataLogin}</span>{" "}
      </p>
      <p className="border-b">
        tasasLogin: <span className="font-medium ">{tasasLogin}</span>{" "}
      </p>

      <button
        onClick={setPaidTrue}
        className="p-1 border border-white bodder-1"
      >
        Pagar Tasas
      </button>

      <button onClick={logout} className="p-1 border border-white bodder-1">
        Logout
      </button>

      <p>Guest: {guest.toString()}</p> */}
    </div>
  );
};

export default ConsoleLog;
