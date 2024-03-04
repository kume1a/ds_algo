//
// Created by tornike on 05.02.24.
//

#ifndef CPP_BST_H
#define CPP_BST_H


template<typename T>
class Node<T> {
public:
    T data;
    Node<T> *left;
    Node<T> *right;

    Node(T data);
};

template<typename T>
class Bst<T> {
private:
    Node<T> *root;
public:
    Bst();

    void insert(T data);

    void remove(Node<T> *node, T key);

    void inOrder(Node<T> *node);

    void preOrder(Node<T> *node);

    void postOrder(Node<T> *node);
}

#endif //CPP_BST_H
