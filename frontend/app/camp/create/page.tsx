import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import { createShopAction } from "@/actions/action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Categoryinput from "@/components/form/Categoryinput";


const CreateProfilePage = async() => {

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Shop</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createShopAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Shop Name"
              type="text"
              placeholder="Shop Name"
            />
          {/* categoryinput */}
          <Categoryinput />
          </div>


          
          <SubmitButton text="Create Shop" size='lg' />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
