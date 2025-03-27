
// Mock data to simulate fetching from Supabase
export const blogPosts = [
  {
    id: "1",
    title: "Building High-Performance Web Applications with Next.js",
    slug: "building-high-performance-web-applications-with-nextjs",
    excerpt: "Learn how to leverage Next.js features to create blazing-fast web applications with optimal user experiences.",
    content: `
# Building High-Performance Web Applications with Next.js

Next.js has emerged as one of the most popular React frameworks for building modern web applications. Its focus on performance, developer experience, and built-in features make it an excellent choice for projects of all sizes.

## Why Performance Matters

In today's digital landscape, user experience is directly tied to performance. Research consistently shows that faster websites lead to:

- Higher conversion rates
- Lower bounce rates
- Better SEO rankings
- Improved user satisfaction

Next.js addresses performance challenges through several innovative approaches.

## Key Performance Features in Next.js

### 1. Server-Side Rendering (SSR)

Server-side rendering generates HTML on the server for each request, which means:

\`\`\`jsx
// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  
  return {
    props: { data }, // Will be passed to the page component as props
  }
}

export default function Home({ data }) {
  return <div>{data.title}</div>
}
\`\`\`

### 2. Static Site Generation (SSG)

For content that doesn't change frequently, static generation pre-renders pages at build time:

\`\`\`jsx
// pages/blog/[slug].js
export async function getStaticPaths() {
  const posts = await getAllPostSlugs()
  
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  
  return {
    props: { post },
  }
}
\`\`\`

### 3. Incremental Static Regeneration (ISR)

ISR allows you to update static content without rebuilding the entire site:

\`\`\`jsx
export async function getStaticProps() {
  const products = await getProducts()
  
  return {
    props: { products },
    revalidate: 60, // Regenerate page every 60 seconds when requested
  }
}
\`\`\`

## Optimizing Images

Next.js provides a built-in Image component that automatically optimizes images:

\`\`\`jsx
import Image from 'next/image'

function ProductImage() {
  return (
    <Image
      src="/products/shirt.jpg"
      alt="Product"
      width={500}
      height={300}
      quality={90}
      priority
    />
  )
}
\`\`\`

## Conclusion

Performance optimization is no longer optional for modern web applications. With Next.js, developers have access to powerful tools and patterns that make building high-performance applications much more straightforward.

By leveraging features like SSR, SSG, ISR, and the Image component, you can create web applications that are not only feature-rich but also blazing fast.
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Development",
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Senior Frontend Developer with 8 years of experience specializing in React and Next.js. Sarah is passionate about creating performant and accessible web applications."
    },
    readingTime: "8 min read",
    date: "May 12, 2023",
    views: 1240,
    related: ["2", "5", "8"]
  },
  {
    id: "2",
    title: "Introduction to Machine Learning: A Beginner's Guide",
    slug: "introduction-to-machine-learning-beginners-guide",
    excerpt: "Dive into the fundamental concepts of machine learning and discover how to start your journey in AI development.",
    content: `
# Introduction to Machine Learning: A Beginner's Guide

Machine learning is transforming industries across the globe. This guide will help you understand the basics and get started with your own machine learning projects.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Instead of writing code to solve a specific problem, you provide data to a machine learning algorithm, which then builds its own logic based on patterns in the data.

## Types of Machine Learning

### Supervised Learning

In supervised learning, the algorithm learns from labeled training data. It makes predictions or decisions based on past examples.

\`\`\`python
# Simple linear regression example using scikit-learn
from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make prediction
prediction = model.predict([[6]])
print(prediction)  # Output: [12.]
\`\`\`

### Unsupervised Learning

Unsupervised learning works with unlabeled data. The algorithm tries to find patterns or structure in the data on its own.

\`\`\`python
# K-means clustering example
from sklearn.cluster import KMeans
import numpy as np

# Sample data
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# Create and train model
kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

# Check cluster assignments
print(kmeans.labels_)  # Output: [0 0 0 1 1 1]
\`\`\`

### Reinforcement Learning

Reinforcement learning involves an agent learning to make decisions by performing actions and receiving rewards or penalties.

## Common Applications

- **Image Recognition**: Identifying objects, people, or actions in images
- **Natural Language Processing**: Understanding and generating human language
- **Recommendation Systems**: Suggesting products, movies, or content
- **Predictive Analytics**: Forecasting trends and behaviors

## Getting Started with Machine Learning

1. **Learn the fundamentals**: Start with linear algebra, calculus, probability, and statistics.
2. **Choose a programming language**: Python is the most popular choice for ML.
3. **Master key libraries**: NumPy, Pandas, scikit-learn, TensorFlow, or PyTorch.
4. **Work on projects**: Apply your knowledge to real-world problems.
5. **Join the community**: Participate in Kaggle competitions and contribute to open-source projects.

## Essential Tools for Beginners

- **Jupyter Notebooks**: Interactive computing environment
- **Google Colab**: Free cloud service for ML development
- **scikit-learn**: Beginner-friendly ML library
- **Kaggle**: Platform for competitions and datasets
- **GitHub**: Version control and collaboration

## Conclusion

Machine learning is a vast and exciting field with endless possibilities. By understanding the core concepts and starting with small projects, you can gradually build your expertise and create impressive ML applications.

Remember that becoming proficient in machine learning takes time and practice. Embrace the journey, and don't be afraid to experiment and make mistakes along the way.
    `,
    coverImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Artificial Intelligence",
    author: {
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "AI Research Scientist with a PhD in Computer Science. Michael focuses on making machine learning concepts accessible to beginners."
    },
    readingTime: "10 min read",
    date: "April 28, 2023",
    views: 1890,
    related: ["3", "6", "9"]
  },
  {
    id: "3",
    title: "Essential Cybersecurity Practices for Developers",
    slug: "essential-cybersecurity-practices-for-developers",
    excerpt: "Learn the critical security practices that every developer should implement to protect applications from common vulnerabilities.",
    content: `
# Essential Cybersecurity Practices for Developers

In today's interconnected world, security is not just the responsibility of specialized security teams. As a developer, the code you write can either be a strong defense or the weakest link in your application's security posture.

## The Developer's Role in Security

Security should be baked into the development process from the start, not added as an afterthought. By adopting a "security-first" mindset, you can prevent many common vulnerabilities before they make it into production.

## Top Security Vulnerabilities to Avoid

### 1. Injection Attacks

SQL injection, NoSQL injection, and command injection attacks occur when untrusted data is sent to an interpreter as part of a command or query.

**Vulnerable Code:**

\`\`\`javascript
// SQL Injection vulnerability
const query = "SELECT * FROM users WHERE username = '" + username + "'";
db.execute(query);
\`\`\`

**Secure Code:**

\`\`\`javascript
// Using parameterized statements
const query = "SELECT * FROM users WHERE username = ?";
db.execute(query, [username]);
\`\`\`

### 2. Broken Authentication

Authentication vulnerabilities can lead to account takeovers and data breaches.

**Best Practices:**

- Implement multi-factor authentication
- Use secure password policies
- Employ proper session management
- Rate-limit login attempts

\`\`\`javascript
// Rate limiting example with Express
const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: "Too many login attempts, please try again later"
});

app.post("/login", loginLimiter, handleLogin);
\`\`\`

### 3. Sensitive Data Exposure

Proper encryption and protection of sensitive data is crucial.

**Best Practices:**

- Use HTTPS for all communications
- Encrypt sensitive data at rest
- Implement proper key management
- Minimize sensitive data collection

\`\`\`javascript
// Using bcrypt for password hashing
const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
  const saltRounds = 12;
  return await bcrypt.hash(plainPassword, saltRounds);
}

async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
\`\`\`

### 4. Cross-Site Scripting (XSS)

XSS allows attackers to inject malicious scripts into web pages viewed by users.

**Vulnerable Code:**

\`\`\`javascript
// Directly inserting user input into HTML
document.getElementById("message").innerHTML = userInput;
\`\`\`

**Secure Code:**

\`\`\`javascript
// Using proper escaping or framework sanitization
import { sanitize } from 'dompurify';
document.getElementById("message").innerHTML = sanitize(userInput);
\`\`\`

## Security Tooling for Developers

Integrate these tools into your development workflow:

1. **Static Application Security Testing (SAST)**: Analyze source code for security vulnerabilities
   - Examples: SonarQube, ESLint security plugins, Semgrep

2. **Software Composition Analysis (SCA)**: Find vulnerabilities in dependencies
   - Examples: npm audit, Snyk, Dependabot

3. **Dynamic Application Security Testing (DAST)**: Test running applications for vulnerabilities
   - Examples: OWASP ZAP, Burp Suite

4. **Secret Scanning**: Detect secrets in code repositories
   - Examples: GitGuardian, Gitleaks

## Secure Development Lifecycle

1. **Planning**: Consider security requirements
2. **Design**: Threat modeling and security architecture
3. **Implementation**: Secure coding practices
4. **Testing**: Security testing and code review
5. **Deployment**: Secure configuration
6. **Maintenance**: Updates and vulnerability management

## Conclusion

Security is a shared responsibility. By implementing these essential security practices, you can significantly reduce the risk of vulnerabilities in your applications. Remember that security is an ongoing process, not a one-time task.

Stay informed about new security threats and continuously update your knowledge and practices. Your commitment to security will protect not only your application but also the users who trust it with their data.
    `,
    coverImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    category: "Cybersecurity",
    author: {
      name: "Alex Rivera",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Security Engineer with 10+ years of experience in application security. Alex works with development teams to build secure software from the ground up."
    },
    readingTime: "12 min read",
    date: "June 3, 2023",
    views: 945,
    related: ["1", "4", "7"]
  },
  {
    id: "4",
    title: "Mastering React Hooks: Beyond the Basics",
    slug: "mastering-react-hooks-beyond-basics",
    excerpt: "Take your React skills to the next level by learning advanced patterns and custom hooks that will make your code more efficient and reusable.",
    content: `
# Mastering React Hooks: Beyond the Basics

React Hooks have revolutionized how we build React components. If you're already familiar with useState and useEffect, it's time to explore more advanced patterns and create custom hooks for cleaner, more maintainable code.

## Advanced useEffect Patterns

### Dependency Cleanup

One common mistake is forgetting to clean up effects, which can lead to memory leaks and bugs:

\`\`\`jsx
// Proper cleanup with useEffect
useEffect(() => {
  const subscription = subscribeToData(dataId);
  
  // Return a cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [dataId]); // Only re-run if dataId changes
\`\`\`

### API Calls with AbortController

For API calls, it's important to handle component unmounting:

\`\`\`jsx
useEffect(() => {
  // Create an AbortController for this effect instance
  const controller = new AbortController();
  const signal = controller.signal;
  
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/data/${id}`, { signal });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
  
  // Cleanup: abort the fetch if component unmounts or dependencies change
  return () => controller.abort();
}, [id]);
\`\`\`

## Custom Hooks for Common Patterns

### useLocalStorage

Create a hook to easily use localStorage with state:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  // Get stored value or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Update state and localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  
  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}
\`\`\`

### useFetch

Create a reusable data fetching hook:

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!url) return;
    
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    return () => controller.abort();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(
    userId ? \`/api/users/\${userId}\` : null
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
\`\`\`

## Using useReducer for Complex State

For complex state logic, useReducer is often cleaner than multiple useState calls:

\`\`\`jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Performance Optimization with Memoization

Use React's memoization hooks to prevent unnecessary re-renders:

### React.memo

\`\`\`jsx
// Only re-render if props change
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});
\`\`\`

### useMemo

\`\`\`jsx
// Only recalculate when dependencies change
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### useCallback

\`\`\`jsx
// Only recreate callback when dependencies change
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Conclusion

By mastering these advanced React Hook patterns, you can write more maintainable, efficient, and reusable code. Custom hooks allow you to extract and share logic between components, while techniques like proper cleanup and memoization ensure your application performs well even as it grows.

Remember, the goal of hooks is to make your code more readable and maintainable. When used correctly, they can significantly improve your React development experience.
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Development",
    author: {
      name: "Emily Zhang",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      bio: "Frontend Developer specializing in React and modern JavaScript. Emily is a frequent conference speaker and loves sharing knowledge about frontend development."
    },
    readingTime: "15 min read",
    date: "May 22, 2023",
    views: 2145,
    related: ["1", "5", "7"]
  },
  {
    id: "5",
    title: "Building a REST API with Node.js and Express",
    slug: "building-rest-api-nodejs-express",
    excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Node.js, Express, and MongoDB.",
    content: `
# Building a REST API with Node.js and Express

In this guide, we'll walk through creating a production-ready REST API using Node.js, Express, and MongoDB.

## Setting Up Your Project

Let's start by creating a new Node.js project:

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express mongoose dotenv cors helmet morgan
npm install --save-dev nodemon
\`\`\`

### Project Structure

A clean structure helps maintain your API as it grows:

\`\`\`
my-api/
  ├── config/         # Configuration files
  ├── controllers/    # Request handlers
  ├── middleware/     # Custom middleware
  ├── models/         # Database models
  ├── routes/         # Route definitions
  ├── utils/          # Utility functions
  ├── .env            # Environment variables
  ├── .gitignore      # Git ignore file
  ├── app.js          # Express application
  ├── server.js       # Server entry point
  └── package.json    # Project dependencies
\`\`\`

## Setting Up Express

Create the main application file:

\`\`\`javascript
// app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(helmet()); // Set security HTTP headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body

// Routes
app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/products', require('./routes/productRoutes'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

module.exports = app;
\`\`\`

Next, create the server entry point:

\`\`\`javascript
// server.js
const mongoose = require('mongoose');
const app = require('./app');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});
\`\`\`

## Creating Models

Let's create a simple user model:

\`\`\`javascript
// models/userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false, // Don't return password in queries
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  // Only hash if password is modified
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check if password is correct
userSchema.methods.isPasswordCorrect = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
\`\`\`

## Controllers

Now let's create controllers to handle user-related operations:

\`\`\`javascript
// controllers/userController.js
const User = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// Get single user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists',
      });
    }
    
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    
    // Remove password from response
    user.password = undefined;
    
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Update user
exports.updateUser = async (req, res, next) => {
  try {
    // Don't allow password updates through this route
    if (req.body.password) {
      return res.status(400).json({
        success: false,
        message: 'This route is not for password updates',
      });
    }
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return updated document
        runValidators: true, // Run model validators
      }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
\`\`\`

## Routes

Let's define the routes for our user resource:

\`\`\`javascript
// routes/userRoutes.js
const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
\`\`\`

## Authentication Middleware

Let's add authentication middleware to protect certain routes:

\`\`\`javascript
// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    let token;
    
    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1];
    }
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by ID from decoded token
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
      });
    }
    
    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    
    next(error);
  }
};

// Restrict routes to certain roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to perform this action',
      });
    }
    next();
  };
};
\`\`\`

## Testing the API

You can test your API using tools like Postman or by writing automated tests with Jest.

## Conclusion

You've now built a robust REST API with Node.js and Express. This foundation can be expanded to include:

- Additional resources (products, orders, etc.)
- Advanced authentication with refresh tokens
- Rate limiting
- API documentation with Swagger
- Test coverage with Jest
- Deployment to cloud platforms

Remember to keep your API secure by validating inputs, handling errors properly, and following REST best practices.
    `,
    coverImage: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Development",
    author: {
      name: "David Lee",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "Full-stack developer specializing in Node.js and React. David has built various APIs and microservices for startups and enterprise clients."
    },
    readingTime: "14 min read",
    date: "June 15, 2023",
    views: 1356,
    related: ["1", "4", "9"]
  },
  {
    id: "6",
    title: "Deep Learning Fundamentals: Neural Networks Explained",
    slug: "deep-learning-fundamentals-neural-networks-explained",
    excerpt: "Explore the core concepts of neural networks and how they form the foundation of modern artificial intelligence systems.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    category: "Artificial Intelligence",
    author: {
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      bio: "ML Engineer and Educator with a PhD in Computer Science. Priya is passionate about making AI concepts accessible to everyone."
    },
    readingTime: "18 min read",
    date: "April 10, 2023",
    views: 2567,
    related: ["2", "9", "10"]
  },
  {
    id: "7",
    title: "Mobile App Security: Protecting User Data",
    slug: "mobile-app-security-protecting-user-data",
    excerpt: "Learn essential techniques to secure mobile applications and safeguard sensitive user information from common threats.",
    coverImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Cybersecurity",
    author: {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      bio: "Mobile Security Specialist with experience securing apps for banking and healthcare industries. James regularly conducts security audits and penetration testing."
    },
    readingTime: "11 min read",
    date: "May 30, 2023",
    views: 876,
    related: ["3", "8", "10"]
  },
  {
    id: "8",
    title: "Progressive Web Apps: The Future of Web Development",
    slug: "progressive-web-apps-future-web-development",
    excerpt: "Discover how PWAs are transforming the web by combining the best features of websites and native applications.",
    coverImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Development",
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Senior Frontend Developer with 8 years of experience specializing in React and Next.js. Sarah is passionate about creating performant and accessible web applications."
    },
    readingTime: "9 min read",
    date: "June 8, 2023",
    views: 1124,
    related: ["1", "4", "5"]
  },
  {
    id: "9",
    title: "Natural Language Processing: From Theory to Application",
    slug: "natural-language-processing-theory-application",
    excerpt: "Explore the fascinating world of NLP and how it enables computers to understand and generate human language.",
    coverImage: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1510&q=80",
    category: "Artificial Intelligence",
    author: {
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "AI Research Scientist with a PhD in Computer Science. Michael focuses on making machine learning concepts accessible to beginners."
    },
    readingTime: "16 min read",
    date: "May 5, 2023",
    views: 1987,
    related: ["2", "6", "10"]
  },
  {
    id: "10",
    title: "Zero Trust Security: Principles and Implementation",
    slug: "zero-trust-security-principles-implementation",
    excerpt: "Learn about the zero trust security model and how it's transforming enterprise network security in the modern age.",
    coverImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Cybersecurity",
    author: {
      name: "Alex Rivera",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Security Engineer with 10+ years of experience in application security. Alex works with development teams to build secure software from the ground up."
    },
    readingTime: "13 min read",
    date: "April 22, 2023",
    views: 1456,
    related: ["3", "7", "9"]
  },
];

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  if (!category) return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get a post by slug
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get posts by author
export const getPostsByAuthor = (authorName) => {
  return blogPosts.filter(post => post.author.name === authorName);
};

// Helper function to get trending posts
export const getTrendingPosts = (limit = 4) => {
  return [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

// Helper function to get related posts
export const getRelatedPosts = (postId) => {
  const post = blogPosts.find(p => p.id === postId);
  if (!post || !post.related) return [];
  
  return post.related.map(id => blogPosts.find(p => p.id === id));
};

// Get categories
export const getCategories = () => {
  const categories = new Set();
  blogPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
};
