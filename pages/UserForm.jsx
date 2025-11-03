import { useForm } from 'react-hook-form'

export function UserForm() {
    
    const { register, handleSubmit } = useForm()

    function onSubmit(data) {
    console.log(data)
  }

    return <section className="container user-form">
        <h1>Form Page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="bill" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="luo" {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="isDeveloper">Is an developer?</label>
          <input
            type="checkbox"
            placeholder="luo"
            value="yes"
            {...register("isDeveloper")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register("email")}
          />
        </div>
        <input type="submit" />
      </form>
    </section>
}

