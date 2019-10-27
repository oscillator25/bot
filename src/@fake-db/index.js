import mock from "./mock";
import "./db/mail-db";
import "./db/todo-db";
import "./db/file-manager-db";
import "./db/contacts-db";
import "./db/calendar-db";
import "./db/invoices-db";
import "./db/profile-db";
import "./db/search-db";
import "./db/faq-db";
import "./db/knowledge-base-db";
import "./db/icons-db";
import "./db/analytics-dashboard-db";
import "./db/project-dashboard-db";
import "./db/quick-panel-db";
import "./db/auth-db";
import "./db/chat-db";
import "./db/e-commerce-db";
import "./db/scrumboard-db";
import "./db/academy-db";
import "./db/notes-db";
import "./db/sessions-db";

mock.onAny().passThrough();
