export default function Address() {
  return (
    <div className="container-shop py-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold">Billing & Shipping Address</h1>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="First Name" />
          <Field label="Last Name" />

          <Field label="Country / Region" select />
          <Field label="Town / City" />

          <Field label="Street Address" />
          <Field label="Apartment, suite, unit, etc. (optional)" />

          <Field label="State" select />
          <Field label="Zip" />

          <Field label="Email Address" />
          <Field label="Phone Number" />
        </div>

        <button className="btn-green mt-7 w-full sm:w-auto">
          Save Address
        </button>
      </div>
    </div>
  );
}

function Field({ label, select = false }) {
  return (
    <label className="text-xs font-medium">
      {label}

      {select ? (
        <select className="input mt-2">
          <option>Select an option</option>
        </select>
      ) : (
        <input className="input mt-2" />
      )}
    </label>
  );
}
