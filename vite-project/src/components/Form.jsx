import { useForm } from "../useForm";

export function Form(){
     const { values, handleChange } = useForm();
    return(
         <section>
        
        <input
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <div>
          <strong>Current values:</strong>
          <pre>{JSON.stringify(values)}</pre>
        </div>
      </section>
    )
}