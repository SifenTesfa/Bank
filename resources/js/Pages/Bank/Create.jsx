import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function CreateBank({ auth }) {
  const { data, setData, post, errors } = useForm({
    image: "",
    name: "",
    description: "",
    loan_interest: "",
    website: "",
    email: "",
    primary_phone: "",
    secondary_phone: "",
    postal_code: "",
    swift_code: "",
    user_id: auth.user.id, // Assuming the user ID is passed as prop
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("bank.store")); // Adjust the route according to your setup
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Create New Bank
          </h2>
        </div>
      }
    >
      <Head title="Create Bank" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel htmlFor="bank_image" value="Bank Image" />
                <TextInput
                  id="bank_image"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="bank_name" value="Bank Name" />
                <TextInput
                  id="bank_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="bank_description" value="Description" />
                <TextAreaInput
                  id="bank_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="loan_interest" value="Loan Interest" />
                <TextInput
                  id="loan_interest"
                  type="number"
                  name="loan_interest"
                  value={data.loan_interest}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("loan_interest", e.target.value)}
                />
                <InputError message={errors.loan_interest} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="website" value="Website" />
                <TextInput
                  id="website"
                  type="url"
                  name="website"
                  value={data.website}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("website", e.target.value)}
                />
                <InputError message={errors.website} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="primary_phone" value="Primary Phone" />
                <TextInput
                  id="primary_phone"
                  type="text"
                  name="primary_phone"
                  value={data.primary_phone}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("primary_phone", e.target.value)}
                />
                <InputError message={errors.primary_phone} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="secondary_phone" value="Secondary Phone" />
                <TextInput
                  id="secondary_phone"
                  type="text"
                  name="secondary_phone"
                  value={data.secondary_phone}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("secondary_phone", e.target.value)}
                />
                <InputError message={errors.secondary_phone} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="postal_code" value="Postal Code" />
                <TextInput
                  id="postal_code"
                  type="text"
                  name="postal_code"
                  value={data.postal_code}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("postal_code", e.target.value)}
                />
                <InputError message={errors.postal_code} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="swift_code" value="SWIFT Code" />
                <TextInput
                  id="swift_code"
                  type="text"
                  name="swift_code"
                  value={data.swift_code}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("swift_code", e.target.value)}
                />
                <InputError message={errors.swift_code} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("bank.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}