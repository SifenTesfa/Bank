import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, blog }) {
  // Initialize form with existing blog data if editing, or default values if creating new
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    title: blog.title || "",
    content: blog.content || "",
    status: blog.status || "",
    slug: blog.slug || "",
    
    _method: blog.id ? "PUT" : "POST", // Use PUT method if editing an existing blog
  });

  // Submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    // Determine the route based on whether a blog ID is present
    post (route("blog.update", blog.id) );
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {blog.id ? `Edit Blog "${blog.title}"` : "Create New Blog"}
          </h2>
        </div>
      }
    >
      <Head title={blog.id ? `Edit Blog "${blog.title}"` : "Create New Blog"} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {blog.image_path && (
                <div className="mb-4">
                  <img src={blog.image_path} className="w-64" alt="Blog Image" />
                </div>
              )}
              <div>
                <InputLabel htmlFor="blog_category_id" value="Category" />

                <SelectInput
                  name="category_id"
                  id="blog_category_id"
                  value={data.category_id}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("category_id", e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </SelectInput>

                <InputError message={errors.category_id} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_image" value="Blog Image" />
                <TextInput
                  id="blog_image"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_title" value="Title" />

                <TextInput
                  id="blog_title"
                  type="text"
                  name="title"
                  value={data.title}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("title", e.target.value)}
                />

                <InputError message={errors.title} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_content" value="Content" />

                <TextAreaInput
                  id="blog_content"
                  name="content"
                  value={data.content}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("content", e.target.value)}
                />

                <InputError message={errors.content} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_slug" value="Slug" />

                <TextInput
                  id="blog_slug"
                  type="text"
                  name="slug"
                  value={data.slug}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("slug", e.target.value)}
                />

                <InputError message={errors.slug} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_status" value="Status" />

                <SelectInput
                  name="status"
                  id="blog_status"
                  value={data.status}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </SelectInput>

                <InputError message={errors.status} className="mt-2" />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route("blog.index")}
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
