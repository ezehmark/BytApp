import MyApp from "./comp.tsx"

const App = ()=>{

	const [myEmail, setMyEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const [notifyMsg, setNotifyMsg] = useState("");
  const [backendActive, setBackendActive] = useState(true);
  const [loadingTxt, setLoadingTxt] = useState("");

  const notifyBoxTop = useSharedValue(-40);
  const notifyBoxOpacity = useSharedValue(1);
return(<MyApp/>)
}
export default App
