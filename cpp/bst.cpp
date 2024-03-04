//
// Created by tornike on 05.02.24.
//

#include "bst.h"
#include <iostream>

template<typename T>
Node<T>::Node(T data) {
    this->data = data;
    this->left = nullptr;
    this->right = nullptr;
}

template<typename T>
Bst<T>::Bst() {
    this->root = nullptr;
}


template<typename T>
void Bst<T>::insert(T data) {
    if (this->root == nullptr) {
        this->root = new Node<T>(data);
        return;

    }

    Node<T> *current = this->root;
    while (true) {
        if (data < current->data) {
            if (current->left == nullptr) {
                current->left = new Node<T>(data);
                break;
            }
            current = current->left;
        } else {
            if (current->right == nullptr) {
                current->right = new Node<T>(data);
                break;
            }
            current = current->right;
        }
    }
}

template<typename T>
Node<T> *minValueNode(Node<T> *node) {
    Node<T> *current = node;

    while (current && current->left != nullptr) {
        current = current->left;
    }

    return current;
}

template<typename T>
void Bst<T>::remove(Node<T> *node, T key) {
    if (node == nullptr) return node;

    if (key < node->key) {
        node->left = deleteNode(node->left, key);
    } else if (key > node->key) {
        node->right = deleteNode(node->right, key);
    } else {
        if (node->left == nullptr) {
            Node<T> *temp = node->right;
            delete node;
            return temp;
        } else if (node->right == nullptr) {
            Node<T> *temp = node->left;
            delete node;
            return temp;
        }

        Node<T> *temp = minValueNode(node->right);
        node->key = temp->key;
        node->right = deleteNode(node->right, temp->key);
    }
    return node;
}

template<typename T>
void Bst<T>::postOrder(Node<T> *node) {
    if (node == nullptr) {
        return;
    }

    postOrder(node->left);
    postOrder(node->right);
    std::cout << node->data << std::endl;
}

template<typename T>
void Bst<T>::preOrder(Node<T> *node) {
    if (node == nullptr) {
        return;
    }

    std::cout << node->data << std::endl;
    postOrder(node->left);
    postOrder(node->right);
}

template<typename T>
void Bst<T>::inOrder(Node<T> *node) {
    if (node == nullptr) {
        return;
    }

    postOrder(node->left);
    std::cout << node->data << std::endl;
    postOrder(node->right);
}