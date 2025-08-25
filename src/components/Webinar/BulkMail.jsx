import React from "react";
import contacts from "./contacts.json"; // if kept in src/

export default function BulkSender() {
  const sendEmail = async (contact) => {
    const payload = {
      service_id: "your_service_id",
      template_id: "your_template_id",
      user_id: "your_public_key",
      template_params: {
        user_name: contact.name,
        user_email: contact.email,
        message: `Hey ${contact.name}, this is a test email from React.`,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      console.log(`✅ Sent to ${contact.email}`);
    } else {
      console.error(`❌ Failed for ${contact.email}`);
    }
  };

  const sendBulk = async () => {
    for (const contact of contacts) {
      await sendEmail(contact);
      await new Promise((r) => setTimeout(r, 200)); // avoid spamming too fast
    }
    alert("All emails sent!");
  };

  return (
    <div className="p-6">
      <button
        onClick={sendBulk}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Send Bulk Emails
      </button>
    </div>
  );
}
