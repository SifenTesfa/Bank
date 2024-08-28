import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, banks, queryParams = null, success }) {
  queryParams = queryParams || {};
  
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("bank.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const deleteBank = (bank) => {
    if (!window.confirm("Are you sure you want to delete this bank?")) {
      return;
    }
    router.delete(route("bank.destroy", bank.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Banks
          </h2>
          <Link
            href={route("bank.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Banks" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-800">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                    <tr>
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                      >
                        ID
                      </TableHeading>
                      <th className="px-3 py-3">Image</th>
                      <TableHeading
                        name="name"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                      >
                        Name
                      </TableHeading>
                      <th className="px-3 py-3">Description</th>
                      <th className="px-3 py-3">Loan Interest</th>
                      <th className="px-3 py-3">Website</th>
                      <th className="px-3 py-3">Email</th>
                      <th className="px-3 py-3">Primary Phone</th>
                      <th className="px-3 py-3">Secondary Phone</th>
                      <th className="px-3 py-3">Postal Code</th>
                      <th className="px-3 py-3">SWIFT Code</th>
                      <th className="px-3 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                    <tr>
                      <th className="px-3 py-3">Search</th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.name}
                          placeholder="Bank Name"
                          onBlur={(e) => searchFieldChanged("name", e.target.value)}
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {banks.data.map((bank) => (
                      <tr className="bg-white border-b" key={bank.id}>
                        <td className="px-3 py-2">{bank.id}</td>
                        <td className="px-3 py-2">
                          <img src={bank.image_path} style={{ width: 60 }} />
                        </td>
                        <th className="px-3 py-2 text-gray-800">
                          <Link href={route("bank.show", bank.id)}>
                            {bank.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">{bank.description}</td>
                        <td className="px-3 py-2">{bank.loan_interest}</td>
                        <td className="px-3 py-2">{bank.website}</td>
                        <td className="px-3 py-2">{bank.email}</td>
                        <td className="px-3 py-2">{bank.primary_phone}</td>
                        <td className="px-3 py-2">{bank.secondary_phone}</td>
                        <td className="px-3 py-2">{bank.postal_code}</td>
                        <td className="px-3 py-2">{bank.swift_code}</td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("bank.edit", bank.id)}
                            className="font-medium text-blue-600 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteBank(bank)}
                            className="font-medium text-red-600 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={banks.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}