#include <iostream>
#include <fstream>
#include <string>
using namespace std;

// Book class definition
class Book {
public:
    int id;
    string title;
    string author;
    int year;

    // Constructor
    Book(int id, string title, string author, int year) {
        this->id = id;
        this->title = title;
        this->author = author;
        this->year = year;
    }
};

// BookManager class to handle array operations
class BookManager {
private:
    Book* books[100];  // Array to store up to 100 books
    int bookCount;

public:
    BookManager() {
        bookCount = 0;
    }

    // Add book to the array
    void addBook(int id, string title, string author, int year) {
        if (bookCount < 100) {
            books[bookCount++] = new Book(id, title, author, year);
            cout << "Book added successfully!" << endl;
        } else {
            cout << "Library is full, cannot add more books!" << endl;
        }
    }

    // Delete book by ID
    void deleteBook(int id) {
        for (int i = 0; i < bookCount; ++i) {
            if (books[i]->id == id) {
                delete books[i];
                // Shift remaining books
                for (int j = i; j < bookCount - 1; ++j) {
                    books[j] = books[j + 1];
                }
                --bookCount;
                cout << "Book deleted successfully!" << endl;
                return;
            }
        }
        cout << "Book not found!" << endl;
    }

    // Display all books
    void displayBooks() {
        if (bookCount == 0) {
            cout << "No books available." << endl;
            return;
        }
        for (int i = 0; i < bookCount; ++i) {
            cout << "ID: " << books[i]->id << ", Title: " << books[i]->title
                 << ", Author: " << books[i]->author << ", Year: " << books[i]->year << endl;
        }
    }

    // Save books to file
    void saveToFile(const string &filename) {
        ofstream file(filename);
        for (int i = 0; i < bookCount; ++i) {
            file << books[i]->id << " "
                 << books[i]->title << " "
                 << books[i]->author << " "
                 << books[i]->year << endl;
        }
        file.close();
        cout << "Books saved to file!" << endl;
    }

    // Load books from file
    void loadFromFile(const string &filename) {
        ifstream file(filename);
        int id, year;
        string title, author;

        while (file >> id) {
            file.ignore(); // Ignore space before title
            getline(file, title, ' '); // Read until space
            getline(file, author, ' '); // Read until space
            file >> year;

            addBook(id, title, author, year);
        }
        file.close();
    }
};

// Main function to interact with the user
int main() {
    BookManager manager;
    int choice;

    // Load books from file on startup
    manager.loadFromFile("books.txt");

    do {
        cout << "\nBook Management System\n";
        cout << "1. Add Book\n";
        cout << "2. Delete Book\n";
        cout << "3. Display Books\n";
        cout << "4. Save Books to File\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: {
                int id, year;
                string title, author;
                cout << "Enter book ID: ";
                cin >> id;
                cin.ignore();  // Ignore the newline character left by cin
                cout << "Enter book title: ";
                getline(cin, title);
                cout << "Enter author name: ";
                getline(cin, author);
                cout << "Enter year of publication: ";
                cin >> year;
                manager.addBook(id, title, author, year);
                break;
            }
            case 2: {
                int id;
                cout << "Enter book ID to delete: ";
                cin >> id;
                manager.deleteBook(id);
                break;
            }
            case 3:
                manager.displayBooks();
                break;
            case 4:
                manager.saveToFile("books.txt");
                break;
            case 5:
                cout << "Exiting...\n";
                break;
            default:
                cout << "Invalid choice! Please try again.\n";
        }
    } while (choice != 5);

    return 0;
}
