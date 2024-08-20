import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, success, bank, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Bank "${bank.name}"`}
          </h2>
          <Link
            href={route("bank.edit", bank.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`Bank "${bank.name}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={bank.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Bank ID</label>
                    <p className="mt-1">{bank.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Bank Name</label>
                    <p className="mt-1">{bank.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Loan Interest</label>
                    <p className="mt-1">{bank.loan_interest}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created By</label>
                    <p className="mt-1">{bank.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Website</label>
                    <p className="mt-1">{bank.website}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Email</label>
                    <p className="mt-1">{bank.email}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">SWIFT Code</label>
                    <p className="mt-1">{bank.swift_code}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Bank Description</label>
                <p className="mt-1">{bank.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You can include more related information or actions below as needed */}
    </AuthenticatedLayout>
  );
}