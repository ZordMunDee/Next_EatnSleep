import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/action";


const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
            <FormInput
              name="userName"
              label="Username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
          <SubmitButton text="Create Profile" size='lg' />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
