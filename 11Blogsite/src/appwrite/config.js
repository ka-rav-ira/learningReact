import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteprojectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,{
            title,
            content,
            featuredImage,
            status,
            userId
        }
      )
    } catch (error) {
        console.log("Appwrite Service::createPost::Error",error);
    }
  }

  async updatePost(slug,{ title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,{
            title,
            content,
            featuredImage,
            status,
        }
      )
    } catch (error) {
        console.log("Appwrite Service::updatePost::Error",error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug
      )
      return true
    } catch (error) {
        console.log("Appwrite Service::deletePost::Error",error);
        return false
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite Service::getPost::Error",error);
        return false;
    }
  }

  async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            queries
        )
    } catch (error) {
        console.log("Appwrite Service::getPosts::Error",error);
        return false;
    }
  }

  //File Upload Service

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
                    conf.appwritebucketId,
                    ID.unique(),
                    file)
    } catch (error) {
        console.log("Appwrite Service::uploadFile::Error",error);
        return false;
    }
  }

  async deleteFile(fileId){
    try{
        await this.bucket.deleteFile(conf.appwritebucketId,fileId)
        return true
    }catch(error){
        console.log("Appwrite Service::deleteFile::Error",error);
        return false;
  }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(conf.appwritebucketId,fileId)
}
}

const service = new Service();
export default service;
