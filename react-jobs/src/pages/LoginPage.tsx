import Login from "../components/Login/LoginForm";

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    <>
      <Login onLogin={handleLogin} />
    </>
  );
};

export default LoginPage;
