export function UncontrolledLogin(){
    const onLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;
    console.log("onLogin:", { username, password, remember });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();
    const form = event.target.form || event.target.closest("form");
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";
    console.log("loginWithFormData:", { username, password, remember });
  };

    return(
        <form onSubmit={onLogin}>
            <label >Username</label>
            <input type="text" name="username" /> 

             <label >Password</label>
            <input type="password" name="password" />

            <label > remember me</label>
            <input type="checkbox" name="remember"/>

        <button type="submit">Login</button>
        <button type="button" onClick={loginWithFormData}>Login with FormData</button>
        </form>
    )
}