// Place this file at: functions/api/submit-lead.ts

export const onRequestPost = async (context: any) => {
  try {
    const body = await context.request.json();

    const { name, mobile, email, description, formTitle } = body as {
      name?: string;
      mobile?: string;
      email?: string;
      description?: string;
      formTitle?: string;
    };

    if (!name || !mobile || !description) {
      return Response.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: context.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Lead: ${name} — ${formTitle || 'General Booking Call'}`,
        from_name: 'Knownaxis Website',
        name,
        mobile,
        email: email || 'Not provided',
        message: description,
        form_title: formTitle || 'General Booking Call',
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return Response.json({ success: false, message: data.message || 'Submission failed' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  }
};