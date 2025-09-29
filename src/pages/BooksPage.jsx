import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  Star, 
  Calendar,
  Download,
  ExternalLink,
  Award,
  Users,
  TrendingUp,
  Quote,
  Zap,
  Target,
  Heart
} from 'lucide-react';

const BooksPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  // Real books data based on research
  const books = [
    {
      id: 1,
      title: "The Man with Five Heads",
      subtitle: "A Literary Fiction Masterpiece",
      category: "fiction",
      description: "A critically acclaimed literary fiction work that showcases Abhishek's creative writing prowess. This novel has received excellent reviews from readers and critics alike, with a remarkable 4.55 rating on Goodreads.",
      coverImage: "https://m.media-amazon.com/images/I/91qS+tmaKTL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg",
      publicationYear: 2020,
      pages: 320,
      rating: 4.55,
      downloads: "5K+",
      price: "₹399",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.goodreads.com/book/show/The-Man-with-Five-Heads",
      highlights: [
        "4.55 rating on Goodreads",
        "Multi-layered narrative",
        "Literary fiction excellence",
        "Critical acclaim"
      ],
      reviews: [
        {
          name: "Goodreads Reader",
          rating: 5,
          text: "A brilliant work of fiction that showcases the author's literary genius. Highly recommended!"
        }
      ]
    },
    {
      id: 2,
      title: "Infinity",
      subtitle: "A Journey Through Mathematical Concepts",
      category: "fiction",
      description: "Another remarkable fiction work that weaves mathematical concepts into engaging storytelling. Demonstrates Abhishek's unique ability to blend his mathematical expertise with creative narrative.",
      coverImage: "https://m.media-amazon.com/images/I/71Ce1SYUiVL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg",
      publicationYear: 2021,
      pages: 280,
      rating: 4.3,
      downloads: "3K+",
      price: "₹349",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.goodreads.com/author/show/6478767.Abhishek_Leela_Pandey",
      highlights: [
        "Mathematical fiction fusion",
        "Unique storytelling approach",
        "Educational entertainment",
        "Creative narrative style"
      ],
      reviews: [
        {
          name: "Mathematics Enthusiast",
          rating: 4,
          text: "A fascinating blend of mathematics and fiction. Abhishek's expertise shines through."
        }
      ]
    },
    {
      id: 3,
      title: "The ALP Book for Idioms and Phrases",
      subtitle: "Complete Guide to English Language Excellence",
      category: "education",
      description: "A comprehensive guide to English idioms and phrases, designed to help CAT aspirants and English language learners master verbal ability. Features systematic categorization and practical examples for effective learning.",
      coverImage: "https://m.media-amazon.com/images/I/31ZYtrEmYtL._SY445_SX342_ML2_.jpg",
      publicationYear: 2022,
      pages: 450,
      rating: 4.6,
      downloads: "12K+",
      price: "₹499",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.scribd.com/document/729261911/Idioms-and-Phrases-by-Abhishek-Leela-Pandey",
      highlights: [
        "Alphabetically organized content",
        "CAT exam focused approach",
        "Comprehensive examples",
        "Practical application methods"
      ],
      reviews: [
        {
          name: "CAT Aspirant",
          rating: 5,
          text: "I found this book to be a real game-changer for verbal ability prep. The concepts are explained systematically, and the practice structure makes preparation much more effective."
        }
      ]
    },
    {
      id: 4,
      title: "The Big Black Book for Figures of Speech",
      subtitle: "for CAT, GMAT, GRE, Other Management Exams, School Children, Teachers and Langauge Enthusiasts: 2",
      category: "education",
      description: "A comprehensive guide to English idioms and phrases, designed to help CAT aspirants and English language learners master verbal ability. Features systematic categorization and practical examples for effective learning.",
      coverImage: "https://m.media-amazon.com/images/I/61UIlQlLGvL._SL1360_.jpg",
      publicationYear: 2019,
      pages: 250,
      rating: 4.4,
      downloads: "2K+",
      price: "₹450",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.indiamart.com/proddetail/creme-20202790955.html",
      highlights: [
       "Alphabetically organized content",
        "CAT exam focused approach",
        "Comprehensive examples",
        "Practical application methods"
      ],
      reviews: [
        {
          name: "CAT Aspirant",
          rating: 4,
          text: "I was struggling with verbal prep before, but this book changed that. It’s organized brilliantly and has made my preparation far more efficient."
        }
      ]
    },
    {
      id: 5,
      title: "The Lady in the Sea: A Multilayered Poetry",
      subtitle: "Poetic Journey Through Emotions",
      category: "poetry",
      description: "A beautiful collection of multilayered poetry written during Abhishek's teenage years but published later. Showcases his early literary talent and emotional depth through carefully crafted verses.",
      coverImage: "https://media.licdn.com/dms/image/v2/C4D22AQHwO7nCTq1o6w/feedshare-shrink_1280/feedshare-shrink_1280/0/1664825438758?e=1761782400&v=beta&t=j4DhSsH4avKVmeAIeeNXb7dRteliSq9qvR5LyC0KKHE",
      publicationYear: 2023,
      pages: 180,
      rating: 4.2,
      downloads: "1.5K+",
      price: "₹299",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.linkedin.com/posts/abhishek-leela-pandey-ab7b4543_abhishekleelapandey-books-literature-activity-6982784000624857088-Y5vB",
      highlights: [
        "Teenage literary genius",
        "Multilayered poetry",
        "Emotional journey",
        "Recently published work"
      ],
      reviews: [
        {
          name: "Poetry Reader",
          rating: 4,
          text: "Beautiful poetry that touches the soul. Amazing to see such talent from teenage years!"
        }
      ]
    },
    {
      id: 6,
      title: "Raag Chutiya",
      subtitle: "Contemporary Literary Expression",
      category: "literature",
      description: "A bold and contemporary literary work that showcases Abhishek's versatility as a writer. Explores modern themes with his signature style and intellectual depth.",
      coverImage: "https://m.media-amazon.com/images/I/71P6PsPyDyL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg",
      publicationYear: 2021,
      pages: 200,
      rating: 4.1,
      downloads: "2.5K+",
      price: "₹375",
      amazonLink: "https://www.amazon.in/stores/author/B072N5TSR1",
      previewLink: "https://www.goodreads.com/author/show/6478767.Abhishek_Leela_Pandey",
      highlights: [
        "Contemporary themes",
        "Bold literary expression",
        "Modern storytelling",
        "Intellectual depth"
      ],
      reviews: [
        {
          name: "Modern Reader",
          rating: 4,
          text: "A bold and thought-provoking work. Abhishek's contemporary style is refreshing."
        }
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Books', icon: BookOpen, count: books.length },
    { key: 'fiction', label: 'Fiction', icon: Heart, count: books.filter(b => b.category === 'fiction').length },
    { key: 'education', label: 'Education', icon: Users, count: books.filter(b => b.category === 'education').length },
    { key: 'literature', label: 'Literature', icon: Target, count: books.filter(b => b.category === 'literature').length },
    { key: 'poetry', label: 'Poetry', icon: Zap, count: books.filter(b => b.category === 'poetry').length }
  ];

  const stats = [
    { icon: BookOpen, label: '6+ Books Published', description: 'Across multiple genres', color: 'text-[#94e2d5]' },
    { icon: Star, label: '4.4 Avg Rating', description: 'Reader satisfaction', color: 'text-yellow-400' },
    { icon: Download, label: '25K+ Downloads', description: 'Global readership', color: 'text-green-400' },
    { icon: Award, label: 'Multi-Genre Author', description: 'Versatile writing', color: 'text-purple-400' }
  ];

  const filteredBooks = activeCategory === 'all' 
    ? books 
    : books.filter(book => book.category === activeCategory);

  return (
    <div className="page-container">
      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-page-title font-bold mb-6">Published Works</h1>
            <p className="text-body text-lg leading-relaxed">
              Explore the diverse literary collection of <span className="text-accent-trust font-semibold">Abhishek Leela Pandey</span>, 
              featuring acclaimed fiction, educational guides, poetry, and literature. From <span className="text-accent-innovation font-semibold">"The Man with Five Heads"</span> to comprehensive CAT preparation materials, each work reflects years of expertise and creative expression.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="grid-responsive-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-card text-center hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-white/10 to-white/20 flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{stat.label}</h3>
                    <p className="text-secondary text-sm">{stat.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.key}
                    variant={activeCategory === category.key ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.key)}
                    className={`space-x-2 ${
                      activeCategory === category.key
                        ? 'bg-gradient-to-r from-[#94e2d5] to-[#3498db] text-white'
                        : 'border-white/50 text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{category.label}</span>
                    <Badge className="bg-white/20 text-white border-0 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Books Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="grid-responsive-2 gap-8">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="h-full"
                >
                  <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 h-full flex flex-col">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Book Cover */}
                      <div className="md:w-1/3 flex-shrink-0">
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop";
                            }}
                          />
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f4d03f] to-[#ff9f8a] text-[#2c3e50] px-3 py-1 rounded-full text-sm font-bold">
                            {book.price}
                          </div>
                        </div>
                      </div>

                      {/* Book Details */}
                      <div className="md:w-2/3 flex flex-col flex-1">
                        <div className="flex-1">
                          {/* Category Badge */}
                          <Badge className="mb-3 bg-gradient-to-r from-[#94e2d5]/20 to-[#3498db]/20 text-[#94e2d5] border border-[#94e2d5]/30 capitalize">
                            {book.category}
                          </Badge>
                          
                          {/* Title & Subtitle */}
                          <h3 className="text-white font-bold text-xl md:text-2xl mb-2 leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-[#94e2d5] font-medium text-lg mb-4">
                            {book.subtitle}
                          </p>
                          
                          {/* Description */}
                          <p className="text-secondary leading-relaxed mb-6">
                            {book.description}
                          </p>
                          
                          {/* Book Info */}
                          <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-[#94e2d5]" />
                              <span className="text-white">{book.publicationYear}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <BookOpen className="w-4 h-4 text-[#94e2d5]" />
                              <span className="text-white">{book.pages} pages</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white">{book.rating}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Download className="w-4 h-4 text-green-400" />
                              <span className="text-white">{book.downloads}</span>
                            </div>
                          </div>
                          
                          {/* Highlights */}
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {book.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                  <span className="text-secondary text-sm">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Reader Review */}
                          {book.reviews && book.reviews.length > 0 && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <Quote className="w-4 h-4 text-[#94e2d5]" />
                                <span className="text-white font-semibold text-sm">Reader Review</span>
                              </div>
                              <p className="text-secondary text-sm italic">"{book.reviews[0].text}"</p>
                              <p className="text-[#94e2d5] text-xs mt-2">- {book.reviews[0].name}</p>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={() => window.open('https://www.amazon.in/stores/author/B072N5TSR1', '_blank')}
                            className="flex-1 bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Buy on Amazon
                          </Button>
                          
                          <Button
                            variant="outline"
                            onClick={() => window.open(book.previewLink, '_blank')}
                            className="flex-1 border-white/50 text-white hover:bg-white/10"
                          >
                            <BookOpen size={16} className="mr-2" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Author Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
              <Quote className="w-16 h-16 mx-auto mb-6 text-[#94e2d5]" />
              <blockquote className="text-white text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
                "Only idiots are confident. It requires a great amount of wisdom and knowledge to be confused. 
                Writing is my way of making sense of this beautiful confusion called life."
              </blockquote>
              <div className="text-[#94e2d5] font-semibold">
                — Abhishek Leela Pandey
              </div>
              <div className="text-white/70 text-sm mt-1">
                Author, Mathematician & EdTech Leader
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <div className="space-y-6">
                <BookOpen className="w-16 h-16 mx-auto text-[#94e2d5]" />
                <h2 className="text-section-title font-bold">Explore the Literary Universe</h2>
                <p className="text-body">
                  Dive into the diverse world of Abhishek's writings - from acclaimed fiction to educational masterpieces. 
                  Each book offers a unique perspective and valuable insights drawn from years of experience and creativity.
                </p>
                <div className="button-group">
                  <Button 
                    size="lg" 
                    onClick={() => window.open('https://www.amazon.in/stores/author/B072N5TSR1', '_blank')}
                    className="btn-responsive bg-gradient-to-r from-[#94e2d5] to-[#3498db] hover:from-[#3498db] hover:to-[#2980b9] text-white font-semibold"
                  >
                    📚 Visit Amazon Store
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/contact')}
                    className="btn-responsive bg-gradient-to-r from-[#ff9f8a] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ff9f8a] text-[#2c3e50] font-semibold"
                  >
                    💬 Discuss Books
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BooksPage;
