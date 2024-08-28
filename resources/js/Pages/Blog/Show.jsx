import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BLOG_STATUS_CLASS_MAP, BLOG_STATUS_TEXT_MAP } from "@/constants.jsx";

export default function Show({ auth, blog }) {
  // Fallback image URL
  const fallbackImage = '/default-image.png';

  // Format dates
  const formatDate = (date) => new Date(date).toLocaleDateString();

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Blog "${blog.title}"`}
          </h2>
          <Link
            href={route("blog.edit", blog.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`Blog "${blog.title}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Blog ID</label>
                    <p className="mt-1">{blog.id}</p>
                  </div>
                  <div className="mt-4">
                    <img
                      src={blog.image_path || fallbackImage}
                      alt={blog.title || "Blog Image"}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Title</label>
                    <p className="mt-1">{blog.title}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          BLOG_STATUS_CLASS_MAP[blog.status]
                        }
                      >
                        {BLOG_STATUS_TEXT_MAP[blog.status]}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Slug</label>
                    <p className="mt-1">{blog.slug}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created Date</label>
                    <p className="mt-1">{formatDate(blog.created_at)}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated Date</label>
                    <p className="mt-1">{formatDate(blog.updated_at)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Content</label>
                <p className="mt-1">{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
