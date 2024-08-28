import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalBanks,
  userBanks,
  totalBlogs,
  userBlogs,
  totalReviews,
  userReviews,
}) {
  // Debugging output
  console.log({
    auth,
    totalBanks,
    userBanks,
    totalBlogs,
    userBlogs,
    totalReviews,
    userReviews,
  });

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Banks Card */}
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h3 className="text-blue-500 text-2xl font-semibold">
                Banks
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{userBanks}</span> / 
                <span className="ml-2">{totalBanks}</span>
              </p>
            </div>
          </div>

          {/* Total Blogs Card */}
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h3 className="text-green-500 text-2xl font-semibold">
                Blogs
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{userBlogs}</span> / 
                <span className="ml-2">{totalBlogs}</span>
              </p>
            </div>
          </div>

          {/* Total Reviews Card */}
          <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Reviews
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{userReviews}</span> / 
                <span className="ml-2">{totalReviews}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
